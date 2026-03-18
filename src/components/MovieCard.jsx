import {Link} from "react-router-dom"
import { FaStar } from "react-icons/fa"
import "./MovieCard.css"

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink }) => {
    return (
        <div className="movie-card">
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            
            <span>
                <FaStar /> {movie.vote_average}
            </span>
            {showLink && (
                <Link to={`/movie/${movie.id}`}>Detalhes</Link>
            )}
        </div>
    )
}

export default MovieCard