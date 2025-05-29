import {Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Error from './pages/error/index.jsx';
import About from './pages/about/index.jsx';
import FicheLogement from './components/FicheLogement.jsx';

export default function Router() { 

    return ( 
        <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/about' element={<About/>} />
            <Route path="/logement/:id" element={<FicheLogement/>} />

        </Routes>
    );
}