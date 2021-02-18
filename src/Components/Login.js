import React, { Component } from 'react'
import PhoneInput from 'react-phone-number-input'
import AuthApiService from '../Service/auth-api-service'
import AppContext from '../AppContext'

export default class Login extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }
    static contextType = AppContext
    state = { error: null }

    handleLogin = (ev) => {
        ev.preventDefault()
        this.setState({ error: null })
        const { phoneNumber, password } = ev.target
        const user = { phone_number: phoneNumber.value, password: password.value }

        AuthApiService.postNewUser(user)
            .then(res => res.json())
            .then((res) => {
                phoneNumber.value = ''
                password.value = ''
                this.context.processLogin(res.authToken)
                this.props.history.push('/')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state

        return (
            <div>
                <div className='page-body'>                    
                <h2>Home</h2>
                    
                    <form onSubmit={this.handleLogin}>
                        <div role='alert'>{error && <p>{error}</p>}
                        </div>

                        <label>Phone Number:</label>
                        <PhoneInput placeholder="Enter phone number" name='phoneNumber' defaultCountry="US" required />
                        <label>Password:</label>
                        <input type='password' name='password' required />

                        <button type='submit'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
