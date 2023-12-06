import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
// fdae795f

import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=fdae795f';

const movie1 = {
    
        "Title": "Spiderman",
        "Year": "2010",
        "imdbID": "tt1785572",
        "Type": "movie",
        "Poster": "N/A"
    
}

 const Greet=() => {

    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=> {
        searchMovies('spiderman');
    },[]);
    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder='search for movies'
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() =>searchMovies(searchTerm)}
                />
            </div>

            {
                movies.length > 0
                ? (
                    <div className='container'>
                    {movies.map((movie) =>(
                        <MovieCard movie={movie} />
                    ))}
                </div>
                ) :(
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
           
        </div>
    );
};

export default Greet