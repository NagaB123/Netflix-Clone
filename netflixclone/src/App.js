
import './App.css';
import React, { useState } from "react";
import MovieDetails from './MovieDetails';
import requests from './constants';

function App() {

  return (
    <div className="App">
      <MovieDetails title="Up Coming" fetchURL={requests.requestUpcoming} />
      <MovieDetails title="Popular" fetchURL={requests.requestPopular} />
      <MovieDetails title="Trending" fetchURL={requests.requestTrending} />
      <MovieDetails title="Top Rated" fetchURL={requests.requestTopRated} />
    </div>
  );
}

export default App;
