import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

type GenreType = {
  id: number;
  name: string;
};

function GenreMovieList() {
  return (
    <div>
      {GenresList.genre.map(
        (item: GenreType, index) =>
          index <= 8 && (
            <div key={item.id} className="p-8 px-8 pb-0 md:px-16 pb-14">
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
