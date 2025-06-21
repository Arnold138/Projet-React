import '../styles/Banner.scss';

export default function Banner({ image, alt, texte }) {
  return (
    <div className="banner">
      <img src={image} alt={alt} className="banner-img" />
      {texte && <h2>{texte}</h2>}
    </div>
  );
}