import logo from '../assets/images/logoblack.png';
import '../styles/Footer.scss';
export default function Footer () { 

    return ( 
        <div className='Footerdisplay'>
        <img src={logo} alt="Kasa logo" className="logoblack" />
        <h4> © 2020 Kasa. All rights reserved</h4>

       </div>
    )
}