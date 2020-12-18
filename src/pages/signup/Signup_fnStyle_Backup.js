import React, { useState } from 'react';
import './Signup.css'
import {Button, Form} from "react-bootstrap";

function Signup_backup() {

  // form input validation state
  const [validated, setValidated] = useState(false);
  // form input values state
  const [signUpData, setSignUpData] = useState({
    data:
      {
        id: '11',
        password: '',
        checkPassword: '',
        nickname: '',
        phoneNumber: '',
        email: ''
      }
  });
  // form validation 에 따른 error data state
  const [errors, setErrors] = useState({
    data:
      {
        password: '',
        phoneNumber: '',
        email: ''
      }
  });

  // submit event 처리
  const formDataValidator = (event) => {
    let isValid = true;

    // form input validation
    for (const item of Object.keys(errors.data)) {
      if (signUpData.data[item] && item === 'password') {  // password validation
        if (signUpData.data.password !== signUpData.data.checkPassword) {
          isValid = false;
          setErrors(prevState => {
            let data = Object.assign({}, prevState.data);
            data['password'] = '비밀번호가 다릅니다.';
            return { data };
          });
        }
      } else if (signUpData.data[item] && item === 'phoneNumber') {  // phone number validation
        //TODO: 휴대전화번호 정규식 안맞음 (010-00009999 가 pass)
        const phoneNumberPattern = new RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
        // const phoneNumberPattern = new RegExp(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
        if (!phoneNumberPattern.test(signUpData.data.phoneNumber)) {
          isValid = false;
          setErrors(prevState => {
            let data = Object.assign({}, prevState.data);
            data['phoneNumber'] = 'Please enter valid phoneNumber.';
            return { data };
          });
        }
      } else if (signUpData.data[item] && item === 'email') {  // email validation
        const emailPattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/);
        // const emailPattern = new RegExp(/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
        // const emailPattern = new RegExp(/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/);
        if (!emailPattern.test(signUpData.data.email)) {
          isValid = false;
          setErrors(prevState => {
            let data = Object.assign({}, prevState.data);
            data['email'] = 'Please enter valid email address.';
            return { data };
          });
        }
      }
    }

    // all input field validation
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      isValid = false;
    }

    // validation 실패 시 event stop
    if (!isValid) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // validation 성공 시 error state reset
      setErrors(prevState => {
        let data = Object.assign({}, prevState.data);
        for (const item of Object.keys(data)) {
          data[item] = ''
        }
        return { data };
      });

      setValidated(true);
      //TODO: test 목적 submit success event 정지, 향후 제거 예정
      event.preventDefault();
      event.stopPropagation();
    }
  };

  // form input values gathering
  const onInput = (e) => {
    setSignUpData(prevState => {
      const key = e.target.id;
      let data = Object.assign({}, prevState.data);
      data[key] = e.target.value;
      return { data };
    });
  }

  // submit event 처리
  // const handleSubmit = async () => {
  //   await formDataValidator();
  // }

  const handleSubmit = (event) => {
    setSignUpData(prevState => {
      let data = Object.assign({}, prevState.data);
      data['nickname'] = 'testiest';
    });
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div className='sign-up'>
      <div className="sign-up-contents-wrapper">
        <div className='sign-up-title'>회원가입</div>
        <div className='sign-up-form-wrapper'>
          {/*<Form className='sign-up-form'>*/}
          <Form className='sign-up-form' validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="id">
              <Form.Control required placeholder="아이디" onChange={onInput} autoComplete="off" value={signUpData?.data?.id} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control required type="password" placeholder="비밀번호" onChange={onInput} />
              <div className="text-danger">{errors.data.password}</div>
            </Form.Group>
            <Form.Group controlId="checkPassword">
              <Form.Control required type="password" placeholder="비밀번호 확인" onChange={onInput} />
              <div className="text-danger">{errors.data.password}</div>
            </Form.Group>
            <Form.Group controlId="nickname">
              <Form.Control required placeholder="닉네임" onChange={onInput} autoComplete="off" value={signUpData?.data?.nickname} />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Control required placeholder="휴대전화번호" onChange={onInput} autoComplete="off" />
              <div className="text-danger">{errors.data.phoneNumber}</div>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control required type="email" placeholder="이메일" onChange={onInput} autoComplete="off" />
              <div className="text-danger">{errors.data.email}</div>
            </Form.Group>

            <div className='button-area'>
              <Button variant="dark" type="submit">회원가입</Button>
            </div>
          </Form>
          {validated ? <div style={{wordBreak: "break-all"}}>{JSON.stringify(signUpData.data)}</div> : null}
        </div>
      </div>
    </div>
  )
}

export default Signup_backup;
