import MovieBanner from "../MovieBanner/MovieBanner";
import MovieButton from "../MovieButton/MovieButton";
import MovieRating from "../MovieRating/MovieRating";
import MovieTitle from "../MovieTitle/MovieTitle";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import './MovieCard.css'

const MovieCard = ({ name, url, number }) => {
  return (
    <div className="container">
      <MovieBanner url={url} />
      <MovieRating number={number} />
      <MovieTitle name={name} />
      <MovieButton text={"Watchlist"} icon={faPlus} />
      <MovieButton text={"Trailer"} icon={faPlay}/>
    </div>
  );
};

export default MovieCard;
