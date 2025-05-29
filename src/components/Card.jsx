import '../styles/Card.scss';
import { Link } from 'react-router-dom';

export default function Card({ data }) {
  return (

   <Link to={`/logement/${data.id}`} className="card">
      <img src={data.cover} alt={data.title} className="card-img" />
      <div className="card-title-overlay">
        <h3>{data.title}</h3>
      </div>
    </Link>
  );
}