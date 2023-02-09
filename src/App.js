import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";
import movie from "./data/data.json";

function App() {
  return (
    <div className="App">
      <div id="card">
        <div className="movies">
          {movie.map((movie) => (
            <MovieCard
              name={movie.Title}
              url={movie.Images[0]}
              number={movie.imdbRating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
