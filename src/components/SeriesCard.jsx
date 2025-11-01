import "./SeriesCard.css";
const SeriesCard = ({ series }) => {
  const { name, rating, description, genre, cast, watch_url, img_url } = series;
  return (
    <li className="grid-item">
      <img width={400} height={200} src={img_url} alt={name} />
      <div>
        <h1>Name: {name}</h1>
        <h2>Rating: {rating}</h2>
        <p>Desc: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button>watch now</button>
        </a>
      </div>
    </li>
  );
};
export default SeriesCard;
