import React, { ChangeEvent, FormEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { RootState } from '../../redux/store';

type Props = {
  sortBy: string;
  currentPage: number;
};

const SearchBar: React.FunctionComponent<Props> = ({ sortBy, currentPage }) => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.query);

  const searchMovies = useCallback(async () => {
    if (query) dispatch(actions.fetchCards(currentPage, query, sortBy));
  }, [currentPage, dispatch, query, sortBy]);

  useEffect(() => {
    searchMovies();
  }, [sortBy, currentPage, searchMovies]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <form className="d-flex col-12 col-lg-6 mb-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="search"
        placeholder="Enter keyword..."
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch(actions.updateQuery(e.target.value))
        }
      />
      <button className="btn btn-outline-primary" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
