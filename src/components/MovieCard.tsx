const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }: { movie: DecoratorMetadataObject }) {
  const altName =
    typeof movie.original_title === "undefined"
      ? ""
      : (movie.original_title as string);

  return (
    <div>
      <img
        className="min-w-[110px] md:min-w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in shadow-xl shadow-black"
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={altName}
      />
    </div>
  );
}

export default MovieCard;
