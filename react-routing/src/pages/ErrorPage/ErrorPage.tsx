import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FunctionComponent = () => {
  return (
    <div className="page container mt-5 d-flex flex-column justify-content-center align-items-center">
      <h1>404 - Not Found</h1>
      <Link to="/" className="link-dark">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
