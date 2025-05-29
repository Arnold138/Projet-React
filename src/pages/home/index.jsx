import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import appartements from '../../appartements/appartement'

export default function Home() {
  return (
    <>
      <Header />
      <div className="body-content">
        <Banner />
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
