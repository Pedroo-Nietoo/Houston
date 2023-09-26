import React, { useEffect } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import logoTeste from '../../assets/images/logoTeste.png';
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
        const links = document.querySelectorAll('.navbar a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener('click', handleSmoothScroll);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    return (
        <div className='LandingPage'>
            <header id="home">
                <nav className='navbar'>
                    <ul className='navItems'>
                        <div>
                            <p className='logo'>🚀</p>
                        </div>
                        <div className='items'>
                            <li className='item'><a href="#about">Sobre</a></li>
                            <li className='item'><a href="#app">Aplicativo</a></li>
                            <li className='item'><a href="#features">Destaques</a></li>
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
                <div id="about">
                    <div id="purple-card">
                        <h1>Sobre nós</h1>
                        <p>A Houston surgiu como um projeto independente produzido por uma única pessoa a fim de testar seus conhecimentos na área da programação como um todo. O projeto está em constante desenvolvimento e busca ser um projeto <i>Full Stack</i></p>
                    </div>
                    <img id="logo" src={logoTeste} alt="logo" />
                </div>
            </main>

            <main>
                <div id="app">
                    <h1>Aplicativo</h1>
                    <p>Lorem20</p>
                </div>
            </main>

            <main>
                <div id="features">
                    <Feature imgURL={habitFeature} alt="habit feature" title="Habit Tracking" content="Crie hábitos, marque como realizados, customize-os e acompanhe seu progresso." />
                    <Feature imgURL={customizationFeature} alt="customization feature" title="Personalização" content="Aplicativo com cores personalizáveis e light/dark mode para ficar do seu agrado." />
                    <Feature imgURL={tasksFeature} alt="tasks feature" title="Lista de tarefas" content="Controle sueus afazeres utilizando o sistema de lista de tarefas." />
                    <Feature imgURL={dashboardFeature} alt="dashboard feature" title="Gráficos de progresso" content="Acompanhe o progresso de seus hábitos com Dashboards incríveis." />
                </div>
            </main>

            <footer id='contact'>
                <Footer />
            </footer>
        </div>
    );
}