import React from 'react';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import './style.scss';

export default function renderApp(): JSX.Element {
  return (
    <>
      <Navbar />
      <App />
    </>
  );
}
