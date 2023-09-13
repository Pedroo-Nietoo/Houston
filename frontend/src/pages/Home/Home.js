import './Home.css';

export default function Home() {


    return (
        <div className='Home'>
            <nav>
                <ul className='homeItems'>
                    <li className='homeItem'><a class="active" href="#home">Home</a></li>
                    <li className='homeItem'><a href="#news">News</a></li>
                    <li className='homeItem'><a href="#contact">Contact</a></li>
                    <li className='homeItem'><a href="#about">About</a></li>
                </ul>
            </nav>

            <h1>Olá, </h1>

        </div >
    );
}
