//Observação caso queira usar a classificação, tem que descomentar as partes relacionadas a ela e colocar a chave da api no .env

import {Link} from "react-router-dom"
import { FaStar } from "react-icons/fa"
// import { useEffect, useState } from "react";
import "./MovieCard.css"

const imageURL = import.meta.env.VITE_IMG;
// const moviesURL = import.meta.env.VITE_API;
// const apiKey = import.meta.env.VITE_API_KEY;


const MovieCard = ({ movie, showLink }) => {
    // const [certification, setCertification] = useState("");

    // // 🔹 função pra pegar classificação
    // const getCertification = async () => {
    //     const res = await fetch(
    //         `${moviesURL}${movie.id}/release_dates?api_key=${apiKey}`
    //     );
    //     const data = await res.json();

    //     const brRelease = data.results.find(r => r.iso_3166_1 === "BR");

    //     if (brRelease && brRelease.release_dates.length > 0) {
    //         setCertification(brRelease.release_dates[0].certification);
    //     } else {
    //         setCertification("N/A");
    //     }
    // };

    // useEffect(() => {
    //     getCertification();
    // }, [movie.id]);

    // const getClassColor = (cert) => {
    //     switch (cert) {
    //         case "L":
    //             return "green";
    //         case "10":
    //             return "blue";
    //         case "12":
    //             return "yellow";
    //         case "14":
    //             return "orange";
    //         case "16":
    //             return "red";
    //         case "18":
    //             return "black";
    //         default:
    //             return "gray";
    //     }
    // };

    return (
        <div className="movie-card">
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            
            <span>
                <FaStar /> {movie.vote_average}
            </span>

             {/* <span className={`classification ${getClassColor(certification)}`}>
                {certification || "N/A"}
            </span> */}
            {showLink && (
                <Link to={`/movie/${movie.id}`}>Detalhes</Link>
            )}
        </div>
    )
}

export default MovieCard