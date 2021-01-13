import React from 'react';
import axios from 'axios';
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

  //TODO: ※ 함수의 내용 중 최상단에 특정 state 를 setState 하게 해두었더라도 그 함수가 끝날떄까지 setState 가 완료되지 않는 것으로 보임 -> 비동기식이라

  // 비밀번호 동일여부 validation
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

  // 비밀번호 확인 동일여부 validation
  pwCheckValidator = (inputData) => {
    this.setState({formData: {...this.state.formData, checkPassword: inputData}});
    if (inputData !== this.state.formData.password) {
      this.setState({isError: {...this.state.isError, checkPassword: false}});
    } else if (inputData === this.state.formData.password) {
      this.setState({isError: {...this.state.isError, checkPassword: true}});
    }
  }

  // 휴대전화번호 validation
  phoneNumberValidator = (inputData) => {
    this.setState({formData: {...this.state.formData, phoneNumber: inputData}});
    const phoneNumberPattern = new RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
    if (!phoneNumberPattern.test(inputData)) {
      this.setState({isError: {...this.state.isError, phoneNumber: false}});
    } else {
      this.setState({isError: {...this.state.isError, phoneNumber: true}});
    }
  }

  // 이메일 validation
  emailValidator = (inputData) => {
    this.setState({formData: {...this.state.formData, email: inputData}});
    const emailPattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/);
    if (!emailPattern.test(inputData)) {
      this.setState({isError: {...this.state.isError, email: false}});
    } else {
      this.setState({isError: {...this.state.isError, email: true}});
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

  stateTest = () => {
    console.log(this.state);
  }

  axiosSignupTest = async () => {
    axios({
      method: 'GET',
      url: '/signup'
      // url: '/signup'
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }

  axiosUserTest = async () => {
    axios({
      method: 'GET',
      url: '/users'
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }

  handleSubmit = (event) => {
    if (!(this.state.isError.checkPassword && this.state.isError.phoneNumber && this.state.isError.email)) {
      event.preventDefault();
      alert('올바른 값을 입력해 주세요.');
      return false;
    }
    alert('success!');
    this.props.history.push('/');
  }

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
                  name="id"
                  placeholder="아이디"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="비밀번호"
                  onChange={e => this.pwValidator(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${this.inputClassNameHelper(this.isInputDataValid('checkPassword'))}`}
                  id="checkPassword"
                  name="checkPassword"
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
                  name="nickname"
                  placeholder="닉네임(별명)"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${this.inputClassNameHelper(this.isInputDataValid('phoneNumber'))}`}
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="휴대전화번호"
                  onChange={e => this.phoneNumberValidator(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${this.inputClassNameHelper(this.isInputDataValid('email'))}`}
                  id="email"
                  name="email"
                  placeholder="이메일주소"
                  onChange={e => this.emailValidator(e.target.value)}
                />
              </div>
              <div className='button-area'>
                <Button variant="dark" type="submit">회원가입</Button>
              </div>
            </Form>
            <button onClick={this.stateTest}>stateTest</button>
            <button onClick={this.axiosSignupTest}>axiosSignupTest</button>
            <button onClick={this.axiosUserTest}>axiosUserTest</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Signup;
