import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';
import AboutPage from './pages/AboutPage/AboutPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import HomePage from './pages/HomePage/HomePage';
import store from './redux/store';

describe('Pages', () => {
  it('renders About page', () => {
    render(<AboutPage />);
  });

  it('renders Details page', () => {
    render(
      <Router>
        <DetailsPage />
      </Router>,
    );
  });

  it('renders Error page', () => {
    render(
      <Router>
        <ErrorPage />
      </Router>,
    );
  });

  it('renders Home page', () => {
    render(
      <Router>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </Router>,
    );
  });
});

describe('Components', () => {
  it('renders App component', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
  });

  it('renders Card component', () => {
    const props = {
      id: '',
      title: '',
      year: '',
      genres: [],
      description: '',
      image: '',
    };

    render(
      <Provider store={store}>
        <Router>
          <Card
            id={props.id}
            title={props.title}
            year={props.year}
            genres={props.genres}
            description={props.description}
            image={props.image}
          />
        </Router>
      </Provider>,
    );
  });

  it('should search movies after form submit', async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <SearchBar sortBy="popularity.desc" />
      </Provider>,
    );
    const form = await findByTestId('form');
    const input = await findByTestId('input');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(form);
    expect(store.getState().isLoading).toBe(true);
  });
});
