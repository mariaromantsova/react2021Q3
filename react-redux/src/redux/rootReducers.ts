import { PayloadAction, combineReducers } from '@reduxjs/toolkit';
import { CardModel } from '../models/card-model';

const setQueryReducer = (state = '', action: PayloadAction<string>) => {
  switch (action.type) {
    case 'SET_QUERY':
      return action.payload;
    default:
      return state;
  }
};

const updateCardsReducer = (
  state = null,
  action: PayloadAction<CardModel[]>,
) => {
  switch (action.type) {
    case 'UPDATE_CARDS':
      return action.payload;
    default:
      return state;
  }
};

const updateTotalPagesReducer = (state = 0, action: PayloadAction<number>) => {
  switch (action.type) {
    case 'UPDATE_TOTAL_PAGES':
      return action.payload;
    default:
      return state;
  }
};

const setLoadingReducer = (state = false, action: PayloadAction<boolean>) => {
  switch (action.type) {
    case 'SET_LOADING':
      return action.payload;
    default:
      return state;
  }
};

const setCurrentPageReducer = (state = 1, action: PayloadAction<number>) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  query: setQueryReducer,
  cards: updateCardsReducer,
  isLoading: setLoadingReducer,
  totalPages: updateTotalPagesReducer,
  currentPage: setCurrentPageReducer,
});
