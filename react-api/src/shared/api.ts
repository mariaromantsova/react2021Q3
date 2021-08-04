import axios from 'axios';

declare const API_KEY: string;

export const getGenres = async (genreIds: number[]): Promise<string[]> =>
  axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    )
    .then(
      res =>
        res.data.genres
          .filter((genre: { id: number }) => genreIds.includes(genre.id))
          .map((genre: { name: string }) => genre.name) || [],
    );

export const getKeywordId = async (keyword: string): Promise<number> =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${keyword}`,
    )
    .then(
      res =>
        res.data.results.find(
          (result: { name: string }) => result.name === keyword,
        )?.id,
    );
