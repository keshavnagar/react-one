import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((series) => (
        <SeriesCard series={series} key={series.id} />
      ))}
    </ul>
  );
};
export default NetflixSeries;
