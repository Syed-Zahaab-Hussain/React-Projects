import "./App.css";
import MovieCard from "./MovieCard";

import searchIcon from "./search.svg";

import { useState } from "react";

const url = import.meta.env.VITE_API_URL;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);


  const searchMovies = async (title) => {
    console.log(url);
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchMovies(searchTerm);
            }
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;



// Q.1: Describe five basic Neilson's Heuristics evaluation guidelines. Define observational methods which are used to
// evaluate the system.

// Q.2: Explain the basic principles of Universal Design. Using Haptic Interaction, Identify the types with examples.
// Discuss diversity in case of disabilities, culture and age groups.

// Q.3 Explain Which approaches are used to make a system supportive for its users. Identify the main requirements for
// the user supports.

// Q.4 Differentiate in Hierarchical Task Analysis, Object Oriented Task Analysis and Object Oriented Task Analysis
// with appropriate examples and its features.

// Q.5 Modify the name for Research paper. Demonstrate how the author has checked the usability on his article.
// Interpret your UX in reading that article
