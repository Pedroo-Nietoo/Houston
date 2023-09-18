import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cadastro.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Dropdown from '../../../components/Dropdown/Dropdown';

export default function Cadastro() {
    const [selected, setSelected] = useState("");
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsOptionSelected(selected !== "");
    }, [selected]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const createUser = (e) => {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const username = document.getElementById("username").value;
        const emailName = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const email = `${emailName}${selected}`;

        const userData = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
            isManager: false
        };

        if (!isOptionSelected) {
            alert('Por favor, escolha um tipo de e-mail.');
            return;
        }

        axios.post('http://localhost:3000/user/create', userData)
            .then(response => {
                alert(`Usuário criado com sucesso`, response);
                axios.post('http://localhost:3000/auth/login', userData)
                    .then(loginResponse => {
                        console.log(loginResponse.data);
                        sessionStorage.setItem('accessToken', loginResponse.data);
                        window.location.replace('/home');
                    })
                    .catch(loginError => {
                        console.log(loginError.response);
                        let translatedErrorMessage = loginError.response.data.message;
                        if (translatedErrorMessage[0] === "password is not strong enough") {
                            translatedErrorMessage = "Senha não é forte o suficiente";
                        }
                        setError(translatedErrorMessage);
                    });
            })
            .catch(error => {
                console.log(error.response);
                let translatedErrorMessage = error.response.data.message;
                if (translatedErrorMessage[0] === "password is not strong enough") {
                    translatedErrorMessage = "Senha não é forte o suficiente";
                }
                setError(translatedErrorMessage);
                console.error(translatedErrorMessage);
            });
    };

    return (
        <div className='Cadastro'>
            <h1>Cadastro</h1>
            <div className='form'>
                <form onSubmit={createUser}>
                    <div className='flexAlign'>
                        <input id="firstName" className='input' placeholder="Nome" required autoComplete='off' />
                        <input id="lastName" className='input' placeholder="Sobrenome" required autoComplete='off' />
                    </div>
                    <input id="username" className='input' placeholder="Username" required autoComplete='off' />
                    <div className='flexAlign'>
                        <input id="email" className='input' placeholder="E-mail" required autoComplete='off' />
                        <Dropdown
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </div>
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
                    <button id="btn" type="submit" >Cadastre-se</button>
                </form>
            </div>
        </div>
    );
}