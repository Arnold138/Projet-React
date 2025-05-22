import logo from '../assets/images/kasalogo.png';
import '../styles/Header.scss';
import { Link } from 'react-router-dom';
import About from '../pages/about';


export default function Header () { 

    return ( 

        <header> 
            <nav> 
                <img src={logo} alt='Kasa logo' className='logo'/>
                <Link to="/">Accueil</Link>
                <Link to="/About">à propos</Link>
                
                
            </nav>
        </header>
    )
}