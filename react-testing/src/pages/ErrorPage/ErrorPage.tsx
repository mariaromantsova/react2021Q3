import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FunctionComponent = () => {
  return (
    <>
      <h1>404 - Not Found</h1>
      <Link to="/" className="link-dark">
        Go Home
      </Link>
    </>
  );
};

export default ErrorPage;
