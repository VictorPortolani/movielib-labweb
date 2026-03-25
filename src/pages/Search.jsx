import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import "../components/MovieCard.css"

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();

  // pega o query da URL
  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
  }, [searchParams]);

  // faz a busca na API
  useEffect(() => {
    if (!query) return;

    const fetchSearch = async () => {
      const res = await fetch(`${searchURL}?api_key=${apiKey}&query=${query}&language=pt-BR`);
      const data = await res.json();

      setResults(data.results || []);
    };

    fetchSearch();
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <p>Showing {results.length || 0} results.</p>

      <div className="movies-container">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Search