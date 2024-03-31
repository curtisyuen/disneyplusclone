import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ genreId, index_ }: { genreId: number; index_: number }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      //console.log(resp.data.results[0]);
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (element: HTMLDivElement) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element: HTMLDivElement) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
          index_ % 3 == 0 ? "mt-[75px]" : "mt-[150px]"
        }`}
        onClick={() => slideLeft(elementRef.current as HTMLDivElement)}
      />

      <div
        ref={elementRef}
        className={`flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 pb-0 md:pt-5 px-3 ${
          index_ % 3 == 0 ? "pb-0" : "pb-5"
        }`}
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} key={index} />
            ) : (
              <MovieCard movie={item} key={index} />
            )}
          </>
        ))}
      </div>

      <IoChevronForwardOutline
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${
          index_ % 3 == 0 ? "mt-[75px]" : "mt-[150px]"
        }`}
        onClick={() => slideRight(elementRef.current as HTMLDivElement)}
      />
    </div>
  );
}

export default MovieList;
