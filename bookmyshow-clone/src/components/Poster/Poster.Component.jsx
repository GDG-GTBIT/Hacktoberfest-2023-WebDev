import React from "react";
import { Link } from "react-router-dom";

const MoviePoster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3 ">
        <div className="h-100 md:h-120 ">
          <img
            className="w-full h-full rounded-md"
            src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
            alt="Poster"
          />
        </div>
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
      </div>
    </Link>
  );
};

const PlayPoster = (props) => {
  return (
    <a
      href="https://in.bookmyshow.com/events/jo-bolta-hai-wohi-hota-hai-ft-by-harsh-gujral/ET00319088"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-col items-start gap-2 px-1 md:px-3 ">
        <div className="h-100 md:h-120 ">
          <img className="w-full h-full rounded" src={props.src} alt="Poster" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{props.title}</h3>
        <h5 className="text-sm font-light">{props.subtitle}</h5>
      </div>
    </a>
  );
};

const Poster = (props) => {
  if (props.isPlay) {
    return <PlayPoster {...props} />;
  }
  return <MoviePoster {...props} />;
};

export default Poster;
