import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { RootState } from '../../redux/store';

type Props = {
  sortBy: string;
};

const SearchBar: React.FunctionComponent<Props> = ({ sortBy }) => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.query);
  const currentPage = useSelector((state: RootState) => state.currentPage);

  const searchMovies = () => {
    if (query) dispatch(actions.fetchCards(currentPage, query, sortBy));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <form
      className="d-flex col-12 col-lg-6 mb-3"
      data-testid="form"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control"
        type="search"
        placeholder="Enter keyword..."
        value={query}
        data-testid="input"
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
