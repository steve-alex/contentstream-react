const API_ENDPOINT = 'http://localhost:3001'
const SIGNUP_URL = `${API_ENDPOINT}/users`
const LOGIN_URL = `${API_ENDPOINT}/users/login`

const login = ({email, password}) => fetch(LOGIN_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        email: email,
        password: password
    })
})

const jsonify = () => {
    
}

export default {
    login
}