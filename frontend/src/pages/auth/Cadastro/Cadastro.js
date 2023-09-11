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
        const nickname = document.getElementById("nickname").value;
        const emailName = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const email = `${emailName}${selected}`;

        const userData = {
            firstName: firstName,
            lastName: lastName,
            nickname: nickname,
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
                window.location.replace('/home');
            })
            .catch(error => {
                let translatedErrorMessage = error.response.data.message[0];
                if (translatedErrorMessage === "password is not strong enough") {
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
                        <input id="firstName" className='input' placeholder="Nome" required />
                        <input id="lastName" className='input' placeholder="Sobrenome" required />
                    </div>
                    <input id="nickname" className='input' placeholder="Nickname" required />
                    <div className='flexAlign'>
                        <input id="email" className='input' placeholder="E-mail" required />
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