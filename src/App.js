import "./App.css";
import MovieBanner from "./components/MovieBanner/MovieBanner";
import MovieButton from "./components/MovieButton/MovieButton";
import MovieRating from "./components/MovieRating/MovieRating";
import MovieTitle from "./components/MovieTitle/MovieTitle";

function App() {
  return (
    <div className="App">
      <div id="card">
        <MovieTitle name={"Moon"} />
        <MovieButton text={"Watchlist"} />
        <MovieButton text={"Trailer"} />
        <MovieRating number={9.3} />
        <MovieBanner url={"https://laopinion.com/wp-content/uploads/sites/3/2022/11/eclipse_1015671946.jpg?quality=80&strip=all&w=1200"}/>
      </div>
    </div>
  );
}

export default App;
