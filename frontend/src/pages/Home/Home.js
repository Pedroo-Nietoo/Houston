import React, { useState, useEffect } from 'react';
import './Home.css';
import { AiOutlineMenu } from 'react-icons/ai';
import axios from 'axios';
import profilePicute from './profile.png'

export default function Home() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('http://localhost:3000/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
                    },
                });

                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <div className='Home'>
            <nav>
                <ul className='homeItems'>
                    <AiOutlineMenu className='homeItem hamburguer' />
                    <li className='homeItem'><a href="#home">Home</a></li>
                    <li className='homeItem'><a href="#news">News</a></li>
                    <li className='homeItem'><a href="#contact">Contact</a></li>
                    <li className='homeItem'><a href="#about">About</a></li>
                </ul>
            </nav>

            <div className='profileCard shadow'>
                <div className='purpleCardPart'>
                    <img src={profilePicute} alt='profile' />
                    <h1 className='greeting'>Olá, {user.firstName} {user.lastName}</h1>
                    <p>{user.username}</p>
                </div>
            </div>
        </div>
    );
}
