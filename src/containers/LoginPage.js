import LoginForm from '../components/loginForm.js'
import NewUserForm from '../components/newUserForm.js'
import React, { useState } from 'react'

const LoginPage = () => {
    return (
        <div>
            <LoginForm />
            <NewUserForm />
        </div>
    )
}