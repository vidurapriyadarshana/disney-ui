import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos()
      .then((response) => {
        console.log(response.data.results);
        setMovieList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>

      <HiChevronLeft
        className="hidden md:block text-white text-[40px] absolute mx-8 mt-[150px] cursor-pointer left-0"
        onClick={() => sliderLeft(elementRef.current)}
      />

      <HiChevronRight
        className="hidden md:block text-white text-[40px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 slider-container scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt={item.title || item.name}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
