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

  //TODO: ※ 비교할 때, state 값과 state 값을 비교하면 새로 변경 된 state 값은 lifecycle 및 render 시점 때문에 변경 이전의 값을 가져옴
  //TODO: ※ setState 는 모든 함수가 실행되고 나서 마지막에 실행되는 것처럼 보임
  //TODO: ※ 지금 막 입력한 값(입력은 되었으나 아직 state 에 저장되기 전 상태임)을 가지고 비교해야 실제로 지금 막 입력한 값을 사용할 수 있음
  pwValidator = (inputData) => {
    this.setState({formData: {...this.state.formData, password: inputData}});
    if (this.state.formData.checkPassword) {
      if (inputData !== this.state.formData.checkPassword) {
        this.setState({isError: {...this.state.isError, checkPassword: false}});
      } else if (inputData === this.state.formData.checkPassword) {
        this.setState({isError: {...this.state.isError, checkPassword: true}});
      }
    }
  }

  pwCheckValidator = (inputData) => {
    this.setState({formData: {...this.state.formData, checkPassword: inputData}});
    if (inputData !== this.state.formData.password) {
      console.log('pw not matched')
      this.setState({isError: {...this.state.isError, checkPassword: false}});
    } else if (inputData === this.state.formData.password) {
      this.setState({isError: {...this.state.isError, checkPassword: true}});
    }
  }

  // 2개 동시에 설정하는 fn
//   // input 에 입력된 value -> state 에 할당
//   this.setState({formData: {...this.state.formData, [inputData.id]: inputData.value}});
//   // 조건에 따른 '비밀번호 확인' input-box 만 validation 처리
//   if (this.state.formData.password !== this.state.formData.checkPassword) {
//   console.log('pw not matched')
//   this.setState({isError: {...this.state.isError, checkPassword: false}});
// } else {
//   this.setState({isError: {...this.state.isError, checkPassword: true}});
// }

  // pwValidator = (inputData) => {
  //   this.setState({formData: {...this.state.formData, checkPassword: inputData}});
  //   if (inputData !== this.state.formData.password) {
  //     console.log('pw not matched')
  //     this.setState({isError: {...this.state.isError, checkPassword: false}});
  //   } else {
  //     this.setState({isError: {...this.state.isError, checkPassword: true}});
  //   }
  // }

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
                  onChange={e => this.pwValidator(e.target.value)}
                  // onChange={e => this.setState({formData: {password: e.target.value}})}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${this.inputClassNameHelper(this.isInputDataValid('checkPassword'))}`}
                  // className={`form-control ${this.state.errors.includes('checkPassword') ? 'is-invalid' : 'is-valid'}`}
                  id="checkPassword"
                  placeholder="비밀번호 확인"
                  onChange={e => this.pwCheckValidator(e.target.value)}
                  autoComplete="off"
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
