import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import templateImg from '../../assets/images/template.png';
import Feature from '../../components/Feature/Feature';
import habitFeature from '../../assets/images/habitFeature.png';
import customizationFeature from '../../assets/images/customizationFeature.png';
import tasksFeature from '../../assets/images/tasksFeature.png';
import dashboardFeature from '../../assets/images/dashboardFeature.png';
import Footer from '../../components/Footer/Footer';

export default function LandingPage() {
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const links = document.querySelectorAll('.navbar a');
        links.forEach((link) => {
            link.addEventListener('click', handleSmoothScroll);
        });

        // Remova os ouvintes de evento quando o componente é desmontado
        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    return (
        <div>
            <header id="home">
                <nav className='navbar'>
                    <ul className='navItems'>
                        <div>
                            <p className='logo'>🚀</p>
                            {/* <li className='logo'>
                                <img src='./assets/background.png' alt='logo' />
                            </li> */}
                        </div>
                        <div className='items'>
                            <li className='item'><a href="#about">Sobre</a></li>
                            <li className='item'><a href="#features">Destaques</a></li>
                            <li className='item'><a href="#app">Aplicativo</a></li>
                            <li className='item'><a href="#contact">Contato</a></li>
                        </div>
                        <li className='account'><Link to="/login">Login</Link></li>
                        <li className='account'><Link to="/cadastro">Cadastro</Link></li>
                    </ul>
                </nav>

                <div className='start'>
                    <h1 className='title'>Transformando seu futuro!</h1>
                    <p className='content'>Aplicativo mobile e página web onde é possível controlar hábitos e atividades, aumentando sua produtividade com o uso de calendário, lista de tarefas, notificações e outros.
                    </p>
                    <button className='startButtons access'><Link to="/cadastro">Acesse o site</Link></button>
                    <button className='startButtons about'><a href="#about">Saiba mais</a></button>
                </div>
                <img className='template' src={templateImg} alt='app' />
            </header>
            <main>
                <div id="features">
                    <Feature imgURL={habitFeature} title="Habit Tracking" content="Crie hábitos, marque como realizados, customize-os e acompanhe seu progresso." />
                    <Feature imgURL={customizationFeature} title="Personalização" content="Aplicativo com cores personalizáveis e light/dark mode para ficar do seu agrado." />
                    <Feature imgURL={tasksFeature} title="Lista de tarefas" content="Controle sueus afazeres utilizando o sistema de lista de tarefas." />
                    <Feature imgURL={dashboardFeature} title="Gráficos de progresso" content="Acompanhe o progresso de seus hábitos com Dashboards incríveis." />
                </div>
            </main>
            <footer id='contact'>
                <Footer />
            </footer>
        </div>
    );
}