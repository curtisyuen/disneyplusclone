import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);

  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      //console.log(resp.data.results);
      setMovieList(resp.data.results);
      //console.log(movieList[0]);
      //console.log(typeof movieList[0]);
      //console.log(typeof movieList[0]["genre_ids"]);
    });
  };

  const sliderRight = (element: HTMLElement) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element: HTMLElement) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current as HTMLElement)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current as HTMLElement)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth "
        ref={elementRef}
      >
        {movieList.map((item: DecoratorMetadataObject, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="w-fit md:h-[310px] min-w-full object-cover
          object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out shadow-xl shadow-black"
            alt={IMAGE_BASE_URL + item.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
