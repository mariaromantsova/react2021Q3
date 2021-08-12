import React from 'react';
import { Link } from 'react-router-dom';
import { CardModel } from '../../models/card-model';
import './Card.scss';

const Card: React.FunctionComponent<CardModel> = ({
  id,
  title,
  year,
  genres,
  description,
  image,
}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={title} />

      <div className="card-body">
        <Link to={`/details/${id}`} className="card-title link-dark">
          {title}
        </Link>
        <p className="card-text">
          <small className="text-muted">{year}</small>
        </p>
        <p className="card-text">{description}</p>
        {genres.length !== 0 && (
          <ul className="genres">
            {genres.map(genre => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
