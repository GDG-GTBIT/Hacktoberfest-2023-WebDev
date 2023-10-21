import React from "react";
import { useContext } from "react";

// context
import { MovieContext } from "../../context/Movie.context";

// components
import Payment from "../PaymentModal/Payment.Component";

const MovieInfo = ({ movie }) => {
  const genres = movie.genres?.map(({ name }) => name).join(", ");
  const { isOpen, setIsOpen, price, rentMovie, buyMovie } =
    useContext(MovieContext);

  return (
    <>
      <Payment setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-8 ">
        <h1 className="text-white font-bold text-5xl">
          {movie.original_title}
        </h1>
        <div className="text-white flex flex-col gap-2">
          <h4>4k Rating</h4>
          <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
          <h4>
            {movie.runtime} min | {genres}{" "}
          </h4>
        </div>
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={rentMovie}
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg "
          >
            Rent ₹ 149
          </button>
          <button
            onClick={buyMovie}
            className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg "
          >
            Buy ₹ 599
          </button>
        </div>
      </div>
      ;
    </>
  );
};

export default MovieInfo;
