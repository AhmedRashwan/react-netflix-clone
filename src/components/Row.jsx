import axios from "axios";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useEffect } from "react";
const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  const slideLeft = () => {
    document.getElementById("slider" + rowId).scrollLeft -= 300;
  };
  const slideRight = () => {
    document.getElementById("slider" + rowId).scrollLeft += 300;
  };
  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchUrl]);
  console.log(movies);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <MdChevronLeft
          onClick={(e) => slideLeft()}
          className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
          size={40}
        ></MdChevronLeft>
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, index) => {
            return (
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg-:w-[280px] p-4 relative inline-block">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />

                <div className="m-4 absolute text-gray-50 text-sm abs top-0 left-0 h-full w-full opacity-0 hover:bg-black/80 hover:opacity-100">
                  <p className="white-space-normal text-xs flex justify-center items-center text-center">
                    {item?.title}
                  </p>
                  <p>
                    {like ? (
                      <FaHeart
                        onClick={(e) => setLike(false)}
                        className="absolute top-4 left-4 text-green-50"
                      />
                    ) : (
                      <FaRegHeart
                        onClick={(e) => setLike(true)}
                        className="absolute top-4 left-4 text-green-50"
                      />
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          onClick={(e) => slideRight()}
          className="bg-white right-0 absolute rounded-full  opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
          size={40}
        ></MdChevronRight>
      </div>
    </>
  );
};

export default Row;
