import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import imageAcceuil from'../../assets/images/backgroundbanner.png'
import Card from '../../components/Card'
import appartements from '../../appartements/appartement'

export default function Home() {
  return (
    <>
      <Header />
      <div className="body-content">
        <Banner 
        image={imageAcceuil}
        alt="Bannière d'acceuil"
        texte="Chez vous,partout et ailleurs"
        />
        
        <section className="cards-list">
          {appartements.map(appart => (
            <Card key={appart.id} data={appart} />
          ))}
        </section>
     
      </div>
      <Footer />  
    </>
  )
}
