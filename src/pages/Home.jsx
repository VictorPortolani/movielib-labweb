import { useState, useEffect } from "react"

import MovieCard from "../components/MovieCard";
import "./Home.css"

//url
//key
//import do TMDB
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
const [topMovies, setTopMovies] = useState([])

const getTopRatedMovies = async (url) => {  
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)
}

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (  
    <>
      <h1>Melhores Filmes</h1>
      <div className="movies-container">
        {topMovies.length > 0 ? (
          topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </>
  )
}

export default Home
