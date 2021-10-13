import React from "react";
import "./MovieCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MovieCard = ({
  movie: { id, title, description, posterURL, release_date, category, rating },
}) => {
  return (
    <div className="col-md-3">
      <div className="card movie mb-3">
        <img src={posterURL} className="card-img-top" alt={title} />
        <div className="card-body">
          <div className="movie-info d-flex align-items-center justify-content-between">
            <h3>
              <Link to={`/moviesDetails/${id}`}>{title}</Link>
            </h3>
            {/*<span className="green">{release_date}</span>*/}
          </div>
          <div className="rate">
            <FontAwesomeIcon icon={faStar} className="iconSatr" />
            <span>{rating}</span>
          </div>
        </div>
        {/*      <div className="overview">
          <h3>
            Overview
          </h3>
          <p>{description}</p>
        </div>*/}
      </div>
    </div>
  );
};

export default MovieCard;
