import "./SeriesCard.css";
const SeriesCard = ({ series }) => {
  const { name, rating, description, genre, cast, watch_url, img_url } = series;
  const buttonStyle = {
    backgroundColor: rating>=8.5 ? "#31694E" : "#F0E491",
    padding: "10px",
    border: "0",
    color: rating>=8.5?"#F0E491":  "#31694E" ,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "1.5rem",
  };
  const condiStyle = rating >= 8.5 ? "green" : "yellow";
  //it catch the value green or yellow and i pass through this condiStyle in our button and rating
  return (
    <li className="grid-item">
      <img width={400} height={200} src={img_url} alt={name} />
      <div className="grid-item-details">
        <h1>
          <strong>Name:</strong> {name}
        </h1>
        <p className={condiStyle}>
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
          <button style={buttonStyle} className={`${condiStyle}`}>watch now</button>
        </a>
      </div>
    </li>
  );
};
export default SeriesCard;
