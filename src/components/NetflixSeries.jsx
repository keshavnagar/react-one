import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
import '../index.css'
const NetflixSeries = () => {
  return (
    <ul className="container">
      {seriesData.map((series) => (
        <SeriesCard className="item" series={series} key={series.id} />
      ))}
    </ul>
  );
};
export default NetflixSeries;
