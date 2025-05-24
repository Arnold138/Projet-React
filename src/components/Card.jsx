import '../styles/Card.scss';

export default function Card({ data }) {
  return (

    <div className='card'> 
    <img src={data.cover} alt={data.title} className="card-img"/>
    <div className="card-title-overlay">
    <h3>{data.title}</h3>
    </div>
    </div>
  );
}