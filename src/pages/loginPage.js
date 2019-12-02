import LoginForm from '../components/loginForm.js'
import NewUserForm from '../components/newUserForm.js'
import React, { useState } from 'react'

const LoginPage = (props) => {
    return (
        <div>
            <LoginForm setCurrentUser={props.setCurrentUser}/>
            <NewUserForm />
        </div>
    )
}

export default LoginPage;
