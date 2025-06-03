import Nav from "../../components/nav"
import Footer from "../../components/Footer";
import Collapse from "../../components/Collapse";
import '../../styles/About.scss';
import fondImageApropos from "../../assets/images/fondimageapropos.png";

export default function About() { 
    return  (  
        <div>
            <header> 
            <nav>
            <Nav /> 
            </nav> 
            <div className="fond-image-apropos-container">
            <img src={fondImageApropos} alt="Fond image à propos" className="fond-image-apropos" />
            </div>
            </header>
            <main>
                <section className="about">
                    <div className="about-collapse">
                        <Collapse title="Fiabilité">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                        </Collapse> 
                        <Collapse title="Respect">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </Collapse> 
                        <Collapse title="Service"> 
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question. </p>
                        </Collapse>

                        <Collapse title="Sécurité">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour les hôtes que pour les voyageurs, chaque logement respecte les normes de sécurité en vigueur.</p>

                        </Collapse> 
                    </div>
                </section>
            </main>
                <Footer />
            </div>

    )
}