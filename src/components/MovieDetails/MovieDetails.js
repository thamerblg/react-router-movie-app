import { movies } from "../../movies";
import "./MovieDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Iframe from "react-iframe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

const MoviesDetails = ({ match }) => {
  const idMovie = match.params.id;
  //console.log(idMovie);
  return (
    <div className="container movie-card">
      {movies
        .filter(
          (movie) =>
            // eslint-disable-next-line
            movie.id == idMovie
        )
        .map((selectedMovie, i) => (
          <div key={i}>
            <div className="image-bg">
              <img
                src={selectedMovie.posterBgURL}
                className="card-img-top imgBg"
                alt={selectedMovie.title}
              />
            </div>
            <div className="details row px-5">
              <div className="col-md-4">
                <div className="img-movie mb-2">
                  <img
                    src={selectedMovie.posterURL}
                    className="img-cover"
                    alt={selectedMovie.title}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div>
                  <div className="title1">{selectedMovie.title}</div>
                  <div className="title2">{selectedMovie.subTitle}</div>
                  <div className="release">
                    Released: {selectedMovie.release_date}
                  </div>
                  <div className="likes">
                    <FontAwesomeIcon icon={faHeart} className="iconLove" />
                    {selectedMovie.popularity} likes
                  </div>
                  <div className="category-movie">
                    {selectedMovie.category.map((item, i) => (
                      <li className="tag" key={i}>
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
                <p className="description">{selectedMovie.description}</p>
              </div>
            </div>
            <div className="vieosIframe col-md-8 ">
              <Iframe
                src={selectedMovie.trailer}
                width="100%"
                height="450px"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      <div className="text-center">
        <Link to={`/`}>
          <button className="btn btn-secondary my-2">Return to home</button>
        </Link>
      </div>
    </div>
  );
};

export default MoviesDetails;
