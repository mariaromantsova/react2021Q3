import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import Settings from '../../components/Settings/Settings';
import { RootState } from '../../redux/store';

const HomePage: React.FunctionComponent = () => {
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [resultsCount, setResultsCount] = useState(20);

  const movies = useSelector((state: RootState) => state.cards);
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const totalPages = useSelector((state: RootState) => state.totalPages);

  return (
    <>
      <SearchBar sortBy={sortBy} />
      <Settings
        setSortBy={setSortBy}
        resultsCount={resultsCount}
        setResultsCount={setResultsCount}
      />

      {totalPages > 0 && <Pagination pagesLimit={10} sortBy={sortBy} />}

      <main className="cards-container mt-3">
        {isLoading && <div className="spinner-border" role="status" />}
        {movies !== null && movies.length === 0 ? (
          <div>No results found, please try another keyword!</div>
        ) : (
          !isLoading &&
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
