import { applyMiddleware, createStore, EmptyObject } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducers';
import { CardModel } from '../models/card-model';

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = EmptyObject & {
  query: '';
  cards: CardModel[];
  isLoading: false;
  totalPages: number;
  currentPage: 1;
};

export default store;
