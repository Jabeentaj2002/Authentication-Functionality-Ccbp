// Write your JS code here
import Cookies from 'js-cookie'

import {Redirect, withRouter} from 'react-router-dom'

import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const onSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 7})
    history.replace('/')
  }

  const onLogin = async () => {
    const url = 'https://apis.ccbp.in/login'

    const userDetails = {username: 'rahul', password: 'rahul@2021'}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      onSuccess(data.jwt_token)
    }
  }
  return (
    <div className="login-container">
      <div className="description-container">
        <h1>Please Login</h1>
        <button type="button" onClick={onLogin}>
          Login with Sample Creds
        </button>
      </div>
    </div>
  )
}

export default withRouter(Login)
