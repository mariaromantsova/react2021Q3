import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';

const App: React.FunctionComponent = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('./cards.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        <SearchBar />
      </div>

      <div className="cards-container">
        {cards.map(card => {
          const { title, year, genres, description, directors, image } = card;

          return (
            <Card
              title={title}
              year={year}
              genres={genres}
              description={description}
              directors={directors}
              image={image}
              key={title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
