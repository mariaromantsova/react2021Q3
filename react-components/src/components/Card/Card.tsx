import React from 'react';
import { CardModel } from '../../models/card-model';
import './Card.scss';

const Card: React.FunctionComponent<CardModel> = ({
  title,
  year,
  genres,
  description,
  image,
}) => (
  <div className="card">
    <img className="card-img-top" src={image} alt={title} />

    <div className="card-body">
      <h3 className="card-title">{title}</h3>
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

export default Card;
