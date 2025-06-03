import { useParams } from "react-router-dom";
import logements from '../appartements/appartement';
import Nav from "./nav.jsx";
import '../styles/FicheLogement.scss';
import Collapse from "./Collapse.jsx";
import Footer from "./Footer.jsx";
export default function FicheLogement () { 
    const {id} = useParams();
    const logement = logements.find((item)=> item.id === id);

    if (!logement) {
        return <div>Logement non trouvé.</div>;
    }

    return (
        <div>
            <nav>
                <div className="navigation">
                    <Nav /> 
                </div>
            </nav>
            <div className="fiche-logement">
                <img src={logement.cover} alt={logement.title} className="fichelogement-cover" />

                {/* Première ligne : Titre + Host */}
                <div className="fichelogement-header">
                  <div className="fichelogement-title">
                    <h1>{logement.title}</h1>
                  </div>
                  <div className="fichelogement-host">
                    <span className="host-name">{logement.host.name}</span>
                    <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
                  </div>
                </div>

                {/* Localisation */}
                <div className="fichelogement-location">
                  <p>{logement.location}</p>
                </div>

                {/* Ligne tags à gauche, rating à droite */}
                <div className="fichelogement-tags-rating">
                  <div className="fichelogement-tags">
                    {logement.tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="fichelogement-rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < Number(logement.rating) ? "★" : "☆"}</span>
                    ))}
                  </div>
                </div>

                {/* Description & Équipements en deux colonnes */}
                <div className="fichelogement-details-row">
                  <div className="fichelogement-description">
                    <Collapse title="Description">
                      <p>{logement.description}</p>
                    </Collapse>
                  </div>
                  <div className="fichelogement-equipments">
                    <Collapse title="Équipements">
                      <ul>
                        {logement.equipments.map(eq => (
                          <li key={eq}>{eq}</li>
                        ))}
                      </ul>
                    </Collapse>
                  </div>
                </div>
            </div>
               <Footer />
        </div>
    );
}
