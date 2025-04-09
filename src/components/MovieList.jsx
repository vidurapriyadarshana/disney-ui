import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline } from "react-icons/io5";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const screenWidth = window.innerWidth;

const MovieList = ({ genereId }) => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    
  useEffect(() => {
    getMovieByGenereId();
  });

    
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
    };
    
  const getMovieByGenereId = () => {
    GlobalApi.getMovieByGenreId(genereId).then((resp) => {
      // console.log(resp.data.results)
      setMovieList(resp.data.results);
    });
  };

  const sliderRightList = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeftList = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
      <div className="reletive">
          <HiChevronLeft
        className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute mt-[150px]"
        onClick={() => sliderLeftList(elementRef.current)}
      />

      <HiChevronRight
        className="text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 absolute right-0 mt-[150px] "
        onClick={() => sliderRightList(elementRef.current)}
          />
      <div  className="flex overflow-x-auto gap-8 slider-container pt-5 px-3 pb-5 scroll-smooth">
        {movieList.map((item, index) => (
          <MovieCard key={index} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
