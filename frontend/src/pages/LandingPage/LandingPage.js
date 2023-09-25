import './LandingPage.css';
import { Link } from 'react-router-dom';
import templateImg from '../../../public/assets/images/template.png';
import Feature from '../../components/Feature/Feature';
import habitFeature from '../../../public/assets/images/habitFeature.png';
import customizationFeature from '../../../public/assets/images/customizationFeature.png';
import tasksFeature from '../../../public/assets/images/tasksFeature.png';
import dashboardFeature from '../../../public/assets/images/dashboardFeature.png';
import Footer from '../../components/Footer/Footer';

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
                <Feature imgURL={habitFeature} title="Habit Tracking" content="Crie hábitos, marque como realizados, customize-os e acompanhe seu progresso." />
                <Feature imgURL={customizationFeature} title="Personalização" content="Aplicativo com cores personalizáveis e light/dark mode para ficar do seu agrado." />
                <Feature imgURL={tasksFeature} title="Lista de tarefas" content="Controle sueus afazeres utilizando o sistema de lista de tarefas." />
                <Feature imgURL={dashboardFeature} title="Gráficos de progresso" content="Acompanhe o progresso de seus hábitos com Dashboards incríveis." />
            </main>
            <Footer />
        </div>
    );
}