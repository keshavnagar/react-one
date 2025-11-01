import "./SeriesCard.css";
const SeriesCard = ({ series }) => {
  const { name, rating, description, genre, cast, watch_url, img_url } = series;
  return (
    <li className="grid-item">
      <img width={400} height={200} src={img_url} alt={name} />
      <div className="grid-item-details">
        <h1 style={{ margin: "1.2rem 0rem" }}>
          <strong>Name:</strong> {name}
        </h1>
        <p style={{ margin: "1.2rem 0rem" }}>
          <strong>Rating:</strong> {rating}
        </p>
        <p style={{ margin: "1.2rem 0rem" }}>
          <strong>Desc:</strong> {description}
        </p>
        <p style={{ margin: "1.2rem 0rem" }}>
          <strong>Genre:</strong> {genre}
        </p>
        <p style={{ margin: "1.2rem 0rem" }}>
          <strong>Cast:</strong> {cast}
        </p>
        <a href={watch_url} target="_blank">
          <button style={{ margin: "1.2rem 0rem" }}>watch now</button>
        </a>
      </div>
    </li>
  );
};
export default SeriesCard;
