import React from 'react';

const SearchBar: React.FunctionComponent = () => (
  <form className="d-flex col-12 col-lg-6 mb-3 mb-lg-0 me-lg-3">
    <input
      className="form-control form-control-dark"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button className="btn btn-outline-dark" type="submit">
      Search
    </button>
  </form>
);

export default SearchBar;
