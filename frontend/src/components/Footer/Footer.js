import React, { useEffect } from 'react';
import './Footer.css';

export default function Footer() {
    const handleSmoothScroll = (e) => {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    };

    useEffect(() => {
        const links = document.querySelectorAll('.Footer a');
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
        <footer className='Footer'>
            <div className='items'>
                <ul>
                    <h3>Início</h3>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#features'>Features</a></li>
                    <li>Features</li>
                </ul>
                <ul>
                    <h3>Sobre nós</h3>
                    <li>Informações da Empresa</li>
                    <li><a href='mailto:pedronieto.2005@gmail.com?subject=Suporte - Houston' target='_blank' rel="noreferrer">Contato</a></li>
                    <li>Copyright</li>
                </ul>
                <ul>
                    <h3>Termos de Serviço</h3>
                    <li><a href='http://localhost:3000/termsOfService' target='_blank' rel="noreferrer">Termos Gerais</a></li>
                    <li><a href='http://localhost:3000/termsOfService' target='_blank' rel="noreferrer">Termos de Uso</a></li>
                    <li><a href='http://localhost:3000/termsOfService' target='_blank' rel="noreferrer">Política de Privacidade</a></li>
                </ul>
                <ul>
                    <h3>Redes sociais</h3>
                    <li><a href='https://www.linkedin.com/in/pedroo-nietoo/' target='_blank' rel="noreferrer">LinkedIn</a></li>
                    <li><a href='https://github.com/Pedroo-Nietoo' target='_blank' rel="noreferrer">GitHub</a></li>
                    <li><a href='https://www.instagram.com/pedroo_nietoo' target='_blank' rel="noreferrer">Instagram</a></li>
                </ul>
            </div>
            <div className='copyright'>
                <p>© 2023 Copyright - Houston</p>
            </div>
        </footer>
    );
}