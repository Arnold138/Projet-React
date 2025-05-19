import Banner from '../../components/Banner';
import Card from '../../components/Card';
import appartements from '../../appartements/appartement';
import Header from '../../components/Header';  
export default function Home() { 

    return ( 
        
     <div>
        <Header/>
        <Banner/> 
        <section className='cards-list'> 
        {appartements.map(appart => (
            <Card key={appart.id} data={appart} />
        ))}
        
        </section>
        </div>
    );
}