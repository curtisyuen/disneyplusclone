const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }: { movie: DecoratorMetadataObject }) {
  const altName =
    typeof movie.title === "undefined" ? "" : (movie.title as string);

  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <img
        className="min-w-[200px] md:min-w-[260px] rounded-lg hover:border-[3px] border-gray-400 shadow-xl shadow-black"
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt={altName}
      />
      <h2 className="w-[200px] md:w-[260px] text-white mt-2">{altName}</h2>
    </section>
  );
}

export default HrMovieCard;
