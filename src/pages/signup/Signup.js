import React, { useState } from 'react';
import './Signup.css'
import {Button, Form} from "react-bootstrap";

class Signup extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      formData: {
        id: '',
        password: '',
        checkPassword: '',
        nickname: '',
        phoneNumber: '',
        email: ''
      },
      isError: {
        checkPassword: false,
        phoneNumber: false,
        email: false
      }
    }
  }

  isInputDataValid = (text) => {
    const inputData = this.state.formData[text];
    const ErrorStatus = this.state.isError[text];

    if (inputData) return ErrorStatus;
  }

  inputClassNameHelper = boolean => {
    switch (boolean) {
      case true:
        return 'is-valid';
      case false:
        return 'is-invalid';
      default:
        return '';
    }
  }

  pwValidator = (inputData) => {
    if (inputData !== this.state.formData.password) {
      console.log('pw not matched')
      this.setState({isError: {...this.state.isError, checkPassword: false}});
    } else {
      this.setState({isError: {...this.state.isError, checkPassword: true}});
      this.setState({formData: {...this.state.formData, checkPassword: inputData}});
    }
  }

  test = () => {
    console.log(this.state);
  }

  handleSubmit = () => {}

  render() {
    return (
      <div className='sign-up'>
        <div className="sign-up-contents-wrapper">
          <div className='sign-up-title'>회원가입</div>
          <div className='sign-up-form-wrapper'>
            <Form className='sign-up-form' onSubmit={this.handleSubmit}>
              <div className="form-group">
                {/*<label>아이디</label>*/}
                {/*<label htmlFor="nameInput">이름</label>*/}
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  placeholder="아이디"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="비밀번호"
                  onChange={e => this.setState({formData: {password: e.target.value}})}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${this.inputClassNameHelper(this.isInputDataValid('checkPassword'))}`}
                  // className={`form-control ${this.state.errors.includes('checkPassword') ? 'is-invalid' : 'is-valid'}`}
                  id="checkPassword"
                  placeholder="비밀번호 확인"
                  onChange={e => this.pwValidator(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="nickname"
                  placeholder="닉네임(별명)"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="휴대전화번호"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="이메일주소"
                />
              </div>
              <div className='button-area'>
                <Button variant="dark" type="submit">회원가입</Button>
              </div>
            </Form>
            <button onClick={this.test}>test</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Signup;
