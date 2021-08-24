import axios from 'axios';
import { DetailsModel } from '../models/details-model';

export const getGenres = async (genreIds: number[]): Promise<string[]> =>
  axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`,
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
      `https://api.themoviedb.org/3/search/keyword?api_key=${process.env.API_KEY}&query=${keyword}`,
    )
    .then(
      res =>
        res.data.results.find(
          (result: { name: string }) => result.name === keyword,
        )?.id,
    );

export const getMovie = (id: string): Promise<DetailsModel> =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`,
    )
    .then(res => res.data);
