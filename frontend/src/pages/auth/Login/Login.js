import React, { useState, useEffect } from 'react';
import './Login.css';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        if (accessToken) {
            window.location.replace('/home');
        }
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const logUser = (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const userData = {
            firstName: "1",
            lastName: "1",
            username: username,
            email: "1@example.com",
            password: password,
            isManager: false
        }

        axios.post('http://localhost:3000/auth/login', userData)
            .then(response => {
                console.log(response.data)
                sessionStorage.setItem('accessToken', response.data);
                alert(`Usuário logado com sucesso`, response);
                window.location.replace('/home');
            })
            .catch(error => {
                console.log(error.response)
                let translatedErrorMessage = error.response.data.message;
                if (translatedErrorMessage[0] === "password is not strong enough") {
                    translatedErrorMessage = "Senha não é forte o suficiente";
                }
                if (translatedErrorMessage === "Internal server error") {
                    translatedErrorMessage = "Usuário não existente";
                }
                setError(translatedErrorMessage);
            });
    };

    return (
        <div className='Login'>
            <h1>Login</h1>
            <div className='form'>
                <form onSubmit={logUser}>
                    <input id="username" className='input' placeholder="Username" required autoComplete='off' />
                    <div className='passwordAlign'>
                        <input
                            id="password"
                            className='passwordInput'
                            placeholder="Senha"
                            type={showPassword ? 'text' : 'password'}
                            required
                            autoComplete='off'
                        />
                        <div className='eye-icon' onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button id="btn" type="submit" >Entrar</button>
                </form>
            </div>
        </div>
    );
}