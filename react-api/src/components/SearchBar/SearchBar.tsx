import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CardModel } from '../../models/card-model';
import { getGenres, getKeywordId } from '../../shared/api';

type Props = {
  setMovies: React.Dispatch<React.SetStateAction<CardModel[] | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

declare const API_KEY: string;

const SearchBar: React.FunctionComponent<Props> = ({
  setMovies,
  setLoading,
}) => {
  const [query, setQuery] = useState('');

  const searchMovies = async () => {
    setLoading(true);

    const movies: CardModel[] = await Promise.all(
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_keywords=${await getKeywordId(
            query,
          )}`,
        )
        .then(res =>
          res.data.results.map(
            async (result: {
              original_title: string;
              release_date: string;
              genre_ids: number[];
              overview: string;
              poster_path: string;
              id: string;
            }) => {
              const movie: CardModel = {
                title: result.original_title,
                year: result.release_date?.split('-')[0],
                genres: await getGenres(result?.genre_ids),
                description: result.overview,
                image: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
                id: result.id,
              };

              return movie;
            },
          ),
        ),
    );

    setLoading(false);

    setMovies(movies.filter(movie => !movie.image.includes('null')));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) searchMovies();
  };

  return (
    <form className="d-flex col-12 col-lg-6 mb-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="search"
        placeholder="Enter keyword..."
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <button className="btn btn-outline-primary" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
