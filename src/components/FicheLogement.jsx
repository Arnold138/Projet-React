import { useParams } from "react-router-dom";
import logements from '../appartements/appartement';
import Nav from "./nav.jsx";
import '../styles/FicheLogement.scss';
import Collapse from "./Collapse.jsx";
import Footer from "./Footer.jsx";
import VectorRight from "../assets/images/right.png"
import VectorLeft from "../assets/images/left.png";
import { useState } from "react";
export default function FicheLogement () { 
    const {id} = useParams();
    const logement = logements.find((item)=> item.id === id);
    const [imgIndex, setImgIndex] = useState(0);
    //Tableau d'images, si pas d'images, on utilise la couverture
    const images = logement.pictures || [logement.cover];
    // Fonction pour changer l'image affichée gauche/droite
    const prevImage = () => { 
      setImgIndex(idx => (idx -1 + images.length) % images.length);
    };
    const nextImage = () => {
      setImgIndex(idx => (idx +1) % images.length);
    };
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
                <div className="fichelogement-carousel"> 
                  {images.length > 1 && (
                    <img 
                      src={VectorLeft} 
                      alt="Image précédente" 
                      className="carousel-arrow left" 
                      onClick={prevImage}
                    />
                  )}
                  <img 
                    src={images[imgIndex]}
                    alt={logement.title}
                    className="fichelogement-coverimg"
                    key={imgIndex}
                    />
                    {images.length > 1 && (
                      <img 
                        src={VectorRight} 
                        alt="Image suivante" 
                        className="carousel-arrow right" 
                        onClick={nextImage}
                        />
                    )}
                  {images.length > 1 && (
                    <div className="carousel-count">
                      {imgIndex + 1}/{images.length}
                    </div>
                  )}
                </div>
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
