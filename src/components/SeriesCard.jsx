import "./SeriesCard.css";
const SeriesCard = ({ series }) => {
  const { name, rating, description, genre, cast, watch_url, img_url } = series;
  return (
    <li className="grid-item">
      <img width={400} height={200} src={img_url} alt={name} />
      <div className="grid-item-details">
        <h1>
          <strong>Name:</strong> {name}
        </h1>
        <p>
          <strong>Rating:</strong> {rating}
        </p>
        <p>
          <strong>Desc:</strong> {description}
        </p>
        <p>
          <strong>Genre:</strong> {genre}
        </p>
        <p>
          <strong>Cast:</strong> {cast}
        </p>
        <a href={watch_url} target="_blank">
          <button>watch now</button>
        </a>
      </div>
    </li>
  );
};
export default SeriesCard;
