import React, { Component } from "react";
import PhoneInput from "react-phone-number-input";
import AuthApiService from "../Service/auth-api-service";
import { AppContext } from "../AppContext";
import './Styling/RegisterLogin.css'

export default class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = AppContext;
  state = { 
    error: null,
    phone_number: '',
  };

  handleLogin = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { phone_number, password } = ev.target;
    const user = { phone_number: phone_number.value, password: password.value };

    AuthApiService.postLogin(user)
      .then((res) => {
        phone_number.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        this.props.history.push("/");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  setValue = (e) => this.setState({ phone_number: e.target.value })

  render() {
    const { error } = this.state;

    return (
      <div>
        <div className='page-body'>
          <h2>Login</h2>

          <div className='register-login-body'>
          <form onSubmit={this.handleLogin}>
            <div role='alert'>{error && <p>{error}</p>}</div>

            <label>Phone Number:</label>
            <PhoneInput
              placeholder='Enter phone number'
              name='phone_number'
              defaultCountry='US'
              onChange={ (e) => this.setValue}
              required
            />
            <label>Password:</label>
            <input type='password' name='password' required />

            <button type='submit'>Login</button>
          </form>
          </div>
        </div>
      </div>
    );
  }
}
