import config from '../config'
import TokenService from './token-service'

const AuthApiService = {

    postNewUser(user) {
        return fetch(`${config.API_ENDPOINT}/user`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postLogin({ phone_number, password }) {
        return fetch(`${config.API_ENDPOINT}/auth/token`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ phone_number, password }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(err => Promise.reject(err))
                    : res.json()
            )
    },

    refreshToken() {
        return fetch(`${config.API_ENDPOINT}/auth/token`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json() 
            )
    },
}

export default AuthApiService