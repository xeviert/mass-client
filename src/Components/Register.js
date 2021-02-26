import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../Service/auth-api-service";
import PhoneInput from "react-phone-number-input";
import "./Styling/RegisterLogin.css";

export default class Register extends Component {
  state = { error: null };

  handleSubmit = (e) => {
    e.preventDefault();
    const { phone_number, password, confirmPassword } = e.target;
    this.setState({ error: null });

    if (password.value !== confirmPassword.value) {
      return this.setState({ error: "Passwords do not match" });
    }

    AuthApiService.postNewUser({
      phone_number: phone_number.value,
      password: password.value,
    })
      .then(() => {
        this.props.history.push("/");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  setValue = () => {};

  render() {
    return (
      <div>
        <div className='page-body'>
          <h2>Register</h2>

          <div className='register-login-body'>
            <form onSubmit={this.handleSubmit}>
              {this.state.error && <p className='error'>{this.state.error}</p>}

              <label>Phone Number:</label>
              <PhoneInput
                placeholder='Enter phone number'
                name='phone_number'
                defaultCountry='US'
                onChange={this.setValue}
                required
              />
              <label id='password-label'>Password:</label>
              <input type='password' name='password' required />
              <label id='password-label'>Confirm Password:</label>
              <input type='password' name='confirmPassword' required />

              <button type='submit'>Register</button>
            </form>

            <div id='already-have-account'>
              Already have an account?
              <Link to='/login'><br />
                  <em>Login</em>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
