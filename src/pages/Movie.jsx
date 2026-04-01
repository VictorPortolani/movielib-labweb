import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar, FaRegClock } from "react-icons/fa"; 

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

function Movie() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [certification, setCertification] = useState("");

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
    }
  };

  const getCertification = async () => {
    try {
      const res = await fetch(
        `${moviesURL}${id}/release_dates?api_key=${apiKey}`
      );
      const data = await res.json();
      const brRelease = data.results.find((r) => r.iso_3166_1 === "BR");

      if (brRelease && brRelease.release_dates.length > 0) {
        setCertification(brRelease.release_dates[0].certification);
      } else {
        setCertification("N/A");
      }
    } catch (error) {
      console.error("Erro ao buscar classificação:", error);
      setCertification("N/A");
    }
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?api_key=${apiKey}&language=pt-BR`;
    getMovie(movieUrl);
    getCertification();
  }, [id]);

  const getClassColor = (cert) => {
    switch (cert) {
      case "L": return "green";
      case "10": return "blue";
      case "12": return "yellow";
      case "14": return "orange";
      case "16": return "red";
      case "18": return "black";
      default: return "gray";
    }
  };

  if (!movie) return <p className="loading">Carregando...</p>;

  const backdropURL = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const releaseYear = movie.release_date ? movie.release_date.substring(0, 4) : "";

  return (
    <div 
      className="movie-backdrop-container" 
      style={{ backgroundImage: `url(${backdropURL})` }}
    >
      <div className="movie-overlay">
        
        <div className="movie-page">
          <img src={imageURL + movie.poster_path} alt={movie.title} className="poster-img" />

          <div className="movie-info">
            <h1>{movie.title}</h1>

            <div className="movie-meta">
              <div className="movie-rating">
                <FaStar /> {movie.vote_average.toFixed(1)}
              </div>
              
              <span className={`classification ${getClassColor(certification)}`}>
                {certification || "N/A"}
              </span>

              <div className="movie-runtime">
                <FaRegClock /> {movie.runtime} min
              </div>
              
              <span className="movie-year">{releaseYear}</span>
            </div>

            <p className="description">{movie.overview}</p>

            <p>
              <strong>Gêneros:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Movie;