import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './sign-in-modal.css'
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import KakaoLogo from '../../assets/image/kakao-logo.svg';
import GoogleLogo from '../../assets/image/google-logo.png';

function SignInModal({ isModalOpen, close }) {

  // form input values state
  const [signInData, setSignInData] = useState(
    {
      signInData: {
        id: '',
        password: ''
      }
    }
  );
  // checkbox state
  const [isChecked, setCheckBox] = useState(false);

  // form input validation
  const handleSubmit = (event) => {

    // submit 후 입력 된 data 확인을 위해 event 일시정지용 dummy part
    event.preventDefault();
    event.stopPropagation();
    // submit 후 입력 된 data 확인을 위해 event 일시정지용 dummy part
  };

  // form input values gathering
  const onInput = (e) => {
    setSignInData(prevState => {
      const key = e.target.id;
      let signInData = Object.assign({}, prevState.signInData);
      signInData[key] = e.target.value;
      return { signInData };
    });
    console.log(signInData);
  }

  return (
    <>
      <div className='modal-wrapper'>
        {/*modal 부분*/}
        <div className='sign-in-modal'>
          <div className='header'>
            <div className='modal-close-button' onClick={close}><AiIcons.AiOutlineClose /></div>
            <div className='sign-in-logo-area'>
              <div className='logo'><GiIcons.GiTigerHead /></div>
              <span>로그인</span>
            </div>
          </div>
          <div className='body'>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="id">
                <Form.Control required placeholder="ID" onChange={onInput} autoComplete="off" />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control required type="password" placeholder="PASSWORD" onChange={onInput} autoComplete="off" />
              </Form.Group>
              <div className='checkbox-row'>
                <Form.Group controlId="checkbox">
                  <Form.Check type="checkbox" label="로그인 유지하기" onClick={() => setCheckBox(!isChecked)} />
                </Form.Group>
                <div className='find-id-pw'>아이디/비밀번호 찾기</div>
              </div>
              <div className='button-area'>
                <Button variant="dark" type="submit">로그인</Button>
                <div className='kakao-button'><img src={KakaoLogo} alt={'kakao-logo'} />카카오톡으로 로그인하기</div>
                <div className='google-button'><img src={GoogleLogo} alt={'google-logo'} />구글계정으로 로그인하기</div>
              </div>
            </Form>
          </div>
          <div className='footer'>
            <span className='member-check-text'>회원이 아니신가요?</span><Link to='/signup' className='sign-up-button' onClick={close}>회원가입</Link>
          </div>
        </div>
        {/*dimmed background*/}
        <div className={isModalOpen ? 'dimmed-page' : ''} onClick={close}></div>
      </div>
    </>
  )
}

export default SignInModal;
