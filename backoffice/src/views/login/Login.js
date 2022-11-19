import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate()
    const loginRef = React.createRef();
    const passwordRef = React.createRef();

    const loginFn = async (e) => {
        e.preventDefault()
        
        const login = loginRef.current.value
        const password = passwordRef.current.value

        const response = await axios.post('/api/login', {login, password})
        
        if (response.data.success) {
            navigate('/panel')
        }
    }

    return (
        <div className='login-container'>
            <div className="login-form">
                <h2>Login</h2>
                <input ref={loginRef} placeholder="login..." />
                <input ref={passwordRef} placeholder="hasło..." />
                <input type="submit" onClick={loginFn} className='link' value="Zaloguj się" />
            </div>
        </div>
    )
}

export default Login;