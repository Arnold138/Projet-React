import logo from '../assets/images/kasalogo.png';
import '../styles/Header.scss';


export default function Header () { 

    return ( 

        <header> 
            <nav> 
                <img src={logo} alt='Kasa logo' className='logo'/>
                
            </nav>
        </header>
    )
}