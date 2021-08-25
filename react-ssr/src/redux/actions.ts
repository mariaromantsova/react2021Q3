import { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { CardModel } from '../models/card-model';
import { RootState } from './store';
import { getGenres, getKeywordId } from '../shared/api';

declare const API_KEY: string;

export const updateQuery = (query: string): PayloadAction<string> => ({
  type: 'SET_QUERY',
  payload: query,
});

export const updateCards = (
  cards: CardModel[],
): PayloadAction<CardModel[]> => ({
  type: 'UPDATE_CARDS',
  payload: cards,
});

export const setTotalPages = (totalPages: number): PayloadAction<number> => ({
  type: 'UPDATE_TOTAL_PAGES',
  payload: totalPages,
});

export const setLoading = (isLoading: boolean): PayloadAction<boolean> => ({
  type: 'SET_LOADING',
  payload: isLoading,
});

export const setCurrentPage = (currentPage: number): PayloadAction<number> => ({
  type: 'SET_CURRENT_PAGE',
  payload: currentPage,
});

export const fetchCards = (
  currentPage: number,
  query: string,
  sortBy: string,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    dispatch(setLoading(true));

    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate&with_keywords=${await getKeywordId(
          query,
        )}&sort_by=${sortBy}`,
      )
      .then(async res => {
        dispatch(setTotalPages(res.data.total_pages));

        const movies: CardModel[] = await Promise.all(
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
        );

        dispatch(
          updateCards(movies.filter(movie => !movie.image.includes('null'))),
        );
        dispatch(setLoading(false));
      });
  };
};
