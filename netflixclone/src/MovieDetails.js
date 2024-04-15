import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import "./styles.css"

const MovieDetails = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchURL]);

    //console.log(movies);

    return (
        <>
            <h2 style={{ color: "white" , fontWeight: 900, marginLeft: 15}}>{title}</h2>
            <div class="MovieRows">
                {movies?.map((item, id) => {
                    return (
                        <MovieCard title={item.original_title} imageUrl={`https://image.tmdb.org/t/p/w185${item.poster_path}`} desc={item.overview}></MovieCard>
                    );
                })}
            </div>
        </>
    );
};

export default MovieDetails;
