import React, { useState } from 'react';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';
import { CardModel } from './models/card-model';

const App: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<CardModel[] | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
      <SearchBar setMovies={setMovies} setLoading={setLoading} />

      <main className="cards-container mt-3">
        {loading && <div className="spinner-border" role="status" />}
        {movies !== null && movies.length === 0 ? (
          <div>No results found, please try another keyword!</div>
        ) : (
          !loading &&
          movies?.map(movie => {
            const { title, year, genres, description, image, id } = movie;

            return (
              <Card
                id={id}
                title={title}
                year={year}
                genres={genres}
                description={description}
                image={image}
                key={id}
              />
            );
          })
        )}
      </main>
    </div>
  );
};

export default App;
