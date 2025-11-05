// import "./SeriesCard.css";
// import styles from "./SeriesCard.module.css";
import styles from "styled-components";
const SeriesCard = ({ series }) => {
  const { name, rating, description, genre, cast, watch_url, img_url } = series;
  // const buttonStyle = {
  //   backgroundColor: rating >= 8.5 ? "#31694E" : "#F0E491",
  //   padding: "10px",
  //   border: "0",
  //   borderRadius: "5px",
  //   color: rating >= 8.5 ? "#F0E491" : "#31694E",
  //   fontWeight: "bold",
  //   textTransform: "uppercase",
  //   letterSpacing: "2px",
  //   fontSize: "1.5rem",
  // };
  const Button = styles.button`
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#12345F" : "#F2F234"}  ;
    padding:  10px;
    border:  0;
    border-radius:  5px;
    color:  ${(props) => (props.rating >= 8.5 ? "#F2F234" : "#12345F")};
    font-weight:  bold;
    text-transform:  uppercase;
    letter-spacing:  2px;
    font-size:  1.5rem;
  `;
  //   const Button = styles.button({
  //   backgroundColor: rating >= 8.5 ? "#333FFF" : "#F0F401",
  //   padding: "10px",
  //   border: "0",
  //   borderRadius: "5px",
  //   color: rating >= 8.5 ? "#F0F401" : "#333FFF",
  //   fontWeight: "bold",
  //   textTransform: "uppercase",
  //   letterSpacing: "2px",
  //   fontSize: "1.5rem",
  // });
  const condiStyle = rating >= 8.5 ? styles.green : styles.yellow;
  //it catch the value green or yellow and i pass through this condiStyle in our button and rating
  return (
    <li className="flex flex-col gap-4  shadow-2xl bg-amber-50">
      <img width={400} height={200} src={img_url} alt={name} />
      <div className={styles[`grid-item-details`]}>
        <h1>
          <strong>Name:</strong> {name}
        </h1>
        <p className={condiStyle}>
          <strong>Rating:</strong> {rating}
        </p>
        <p className="text-3xl font-bold underline">
          <strong>Desc:</strong> {description}
        </p>
        <p>
          <strong>Genre:</strong> {genre}
        </p>
        <p>
          <strong>Cast:</strong> {cast}
        </p>
        <a href={watch_url} target="_blank">
          {/* <button style={Button}>watch now</button> */}
          <Button rating={rating}>Watch Now</Button>
        </a>
      </div>
    </li>
  );
};
export default SeriesCard;
