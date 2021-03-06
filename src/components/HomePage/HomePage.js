import { useEffect, useState } from "react";
import AddMovie from "../AddMovie/AddMovie";
import Filter from "../Filter/Filter";
import MovieList from "../MovieList/MovieList";
import { movies } from "../../movies";

const HomePage = () => {
  const [moviesList, setMoviesList] = useState(movies);
  const [titleSearch, setTitleSearch] = useState("");
  const [ratingSearche, setRatingSearche] = useState("");

  const filterMovieByTitle = () => {
    setMoviesList(
      movies.filter((movie) =>
        movie.title.toLowerCase().startsWith(titleSearch.toLowerCase().trim())
      )
    );
  };
  const filterMovieByRating = () => {
    setMoviesList(movies.filter((movie) => movie.rating > ratingSearche));
  };
  const AddNewMovie = (newMovie) => {
    movies.push(newMovie);
    setMoviesList([...moviesList, newMovie]);
  };
  useEffect(() => {
    filterMovieByTitle();
    // eslint-disable-next-line
  }, [titleSearch]);
  useEffect(() => {
    filterMovieByRating();
    // eslint-disable-next-line
  }, [ratingSearche]);

  return (
    <div className="container my-3">
      <Filter
        setTitleSearch={setTitleSearch}
        ratingSearche={ratingSearche}
        setRatingSearche={setRatingSearche}
      />
      <MovieList moviesList={moviesList} />
      <AddMovie AddNewMovie={AddNewMovie} />
    </div>
  );
};

export default HomePage;
