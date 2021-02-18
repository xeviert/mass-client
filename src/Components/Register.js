import React, { Component } from 'react'
import AuthApiService from '../Service/auth-api-service'
import PhoneInput from 'react-phone-number-input'

export default class Register extends Component {
    state = { error: null }

    handleSubmit = (e) => {
        e.preventDefault()
        const { phoneNumber, password, confirmPassword } = e.target
        this.setState({ error: null })

        if (password.value !== confirmPassword.value) {
            return this.setState({ error: 'Passwords do not match' })
        }

        AuthApiService.postNewUser({
            phone_number: phoneNumber.value,
            password: password.value,
        })
            .then(res => res.json())
            .then(() => {
                this.props.history.push('/')
            })
            .catch((error) => {
                this.setState({ error: error })
            })
    }

    render() {
        return (
            <div>
                <div className='page-body'>                    
                <h2>Register</h2> 

                <form onSubmit={this.handleSubmit}>
                    {this.state.error && <p className='error'>{this.state.error}</p>}

                    <label>Phone Number:</label>
                    <PhoneInput placeholder="Enter phone number" name='phoneNumber' defaultCountry="US" required />
                    <label>Password:</label>
                    <input type='password' name='password' required />
                    <label>Confirm Password:</label>                    
                    <input type='password' name='confirmPassword' required />

                    <button type='submit'>
                        Register
                    </button>
                </form>

                <div>
                    <p>Already have an account?</p>
                    <Link to='/login'>
                        <p><em>Login</em></p>
                    </Link>
                </div>

                </div>
            </div>
        )
    }
}
