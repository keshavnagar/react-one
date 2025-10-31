import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
import "../index.css";
import "./NetflixSeries.css"
const NetflixSeries = () => {
  return (
    <>
      <h1 className="heading">List of netflix series</h1>{" "}
      <ul className="grid grid-three-cols">
        {seriesData.map((series) => (
          <SeriesCard className="item" series={series} key={series.id} />
        ))}
      </ul>
    </>
  );
};
export default NetflixSeries;
