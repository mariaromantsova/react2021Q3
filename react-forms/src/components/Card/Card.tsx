import React from 'react';
import { CardModel } from '../../models/card-model';
import './Card.scss';

const Card: React.FunctionComponent<CardModel> = ({
  firstName,
  lastName,
  birthDate,
  country,
  agree,
  getNotifications,
}) => (
  <div className="card">
    <div className="card-body">
      <p>
        <b>First name:</b> {firstName}
      </p>
      <p>
        <b>Last name:</b> {lastName}
      </p>
      <p>
        <b>Birth date:</b> {birthDate}
      </p>
      <p>
        <b>Country:</b> {country}
      </p>
      <p>
        <b>Agree: </b> {agree?.toString()}
      </p>
      <p>
        <b>Get notifications: </b> {getNotifications?.toString()}
      </p>
    </div>
  </div>
);

export default Card;
