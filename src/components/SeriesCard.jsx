const SeriesCard = ({ series }) => {
  return (
    <li style={{ listStyle: "none" }}>
      <div>
        <img width={400} height={200} src={series.img_url} alt={series.name} />
      </div>
      <h1>Name: {series.name}</h1>
      <h2>Rating: {series.rating}</h2>
      <p>Desc: {series.description}</p>
      <p>Genre: {series.genre}</p>
      <p>Cast: {series.cast}</p>
      <a href={series.watch_url} target="_blank">
        <button>watch now</button>
      </a>
    </li>
  );
};
export default SeriesCard;
