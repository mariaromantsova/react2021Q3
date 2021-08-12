import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import Settings from '../../components/Settings/Settings';
import { CardModel } from '../../models/card-model';

const HomePage: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<CardModel[] | null>(null);
  const [loading, setLoading] = useState(false);

  const [sortBy, setSortBy] = useState('popularity.desc');
  const [resultsCount, setResultsCount] = useState(20);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <SearchBar
        setMovies={setMovies}
        setLoading={setLoading}
        sortBy={sortBy}
        resultsCount={resultsCount}
        setTotalPages={setTotalPages}
        currentPage={currentPage}
      />
      <Settings
        setSortBy={setSortBy}
        resultsCount={resultsCount}
        setResultsCount={setResultsCount}
      />

      {totalPages > 0 && (
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
          pagesLimit={10}
        />
      )}

      <main className="cards-container mt-3">
        {loading && <div className="spinner-border" role="status" />}
        {movies !== null && movies.length === 0 ? (
          <div>No results found, please try another keyword!</div>
        ) : (
          !loading &&
          movies?.slice(0, resultsCount).map(movie => {
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
    </>
  );
};

export default HomePage;
