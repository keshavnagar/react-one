const SeriesCard = ({ series }) => {
  const { name, rating, description, genre, cast, watch_url, img_url } = series;

  return (
    <li className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
      <img src={img_url} alt={name} className="w-full h-60 object-cover" />

      <div className="py-[3.2rem] px-[1.2rem] flex flex-col gap-2">
        <h1 className="text-xl font-semibold tracking-wide">{name}</h1>

        <p className="text-gray-700 text-sm">
          <strong className="font-semibold">Rating:</strong> {rating}
        </p>

        <p className="text-gray-600">
          <strong className="font-semibold">Description:</strong> {description}
        </p>

        <p className="text-gray-700 text-sm">
          <strong className="font-semibold">Genre:</strong> {genre}
        </p>

        <p className="text-gray-700 text-sm">
          <strong className="font-semibold">Cast:</strong> {cast}
        </p>

        <a href={watch_url} target="_blank" rel="noreferrer" className="mt-3">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 m-8 rounded-md transition-colors duration-200">
            Watch Now
          </button>
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
