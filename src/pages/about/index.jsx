import Nav from "../../components/nav"
import Banner from "../../components/Banner";
import fondImageApropos from "../../assets/images/fondimageapropos.png";
import Footer from "../../components/Footer";
import Collapse from "../../components/Collapse";
import '../../styles/About.scss';

export default function About() { 
    return  (  
        <div>
            <header> 
            <nav>
            <Nav /> 
            </nav> 
             <Banner 
             image={fondImageApropos}
             alt="Bannière à propos"
             />
            </header>
            <main>
                <section className="about">
                    <div className="about-collapse">
                        <div className="title-about">
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
                    </div>
                </section>
            </main>
                <Footer />
            </div>

    )
}