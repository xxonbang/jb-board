import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './sign-in-modal.css'
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import KakaoLogo from '../../assets/image/kakao-logo.svg';
import GoogleLogo from '../../assets/image/google-logo.png';

function SignInModal({ isModalOpen, close }) {
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
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className='checkbox-row'>
                <Form.Group>
                  <Form.Check type="checkbox" label="로그인 유지하기" />
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
            <span className='member-check-text'>회원이 아니신가요?</span><div className='sign-up-button'>회원가입</div>
          </div>
        </div>
        {/*dimmed background*/}
        <div className={isModalOpen ? 'dimmed-page' : ''} onClick={close}></div>
      </div>
    </>
  )
}

export default SignInModal;
