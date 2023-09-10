import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cadastro.css';
import Dropdown from '../../components/Dropdown/Dropdown';

export default function Cadastro() {
    const [selected, setSelected] = useState("");
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    useEffect(() => {
        setIsOptionSelected(selected !== "");
    }, [selected]);

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
                alert(`Usuário criado com sucesso \n ${response.data}`, response.data);
                // window.location.replace('/login');
                console.log(response);
            })
            .catch(error => {
                alert('Erro ao criar usuário:', error);
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
                    <input id="password" className='input' placeholder="Senha" required />
                    <button id="btn" type="submit">Cadastre-se</button>
                </form>
            </div>
        </div>
    );
}