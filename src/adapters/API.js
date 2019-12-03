const API_ENDPOINT = 'http://localhost:3001'
const SIGNUP_URL = `${API_ENDPOINT}/users`
const LOGIN_URL = `${API_ENDPOINT}/users/login`
const VALIDATE_URL = `${API_ENDPOINT}/users/validate`

const login = ({email, password}) => {
  return fetch(LOGIN_URL, {
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
  .then(resp => resp.json())
  .then(data => {
    localStorage.setItem("token", data.token)
    return data
  })
}

//Make this function work properly
const jsonify = (res) => {
  if (!res.ok) throw res;
  return res.json().then(data => {
      if (data.err) {
        throw data.err
      } else {
        return data
      }
  });
}

const validate = (user) => {
  return fetch(VALIDATE_URL, {
    headers: {
      Authorisation: localStorage.getItem("token")
    }
  })
  .then(jsonify)
  .then(data => {
    localStorage.setItem("token", data.token);
    return data.user
  })
}

export default {
    login,
    validate
}
