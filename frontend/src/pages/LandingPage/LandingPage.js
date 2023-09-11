import './LandingPage.css';
import { Link } from 'react-router-dom';
import templateImg from './assets/template.png';
export default function LandingPage() {
    return (
        <div>
            <header>
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
                            <li className='item'><a href="#highlights">Destaques</a></li>
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
            </main>
        </div>
    );
}