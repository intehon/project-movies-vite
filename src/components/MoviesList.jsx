import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../utils/urls'

export const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                console.log('data: ', data.results)
                setMovies(data.results)
            })
            .catch(error => console.log('error: ', error))
    }, [])

    return (
        <section>
            <div className='moviesListContainer'>
                <h2>Movie List:</h2>
                {movies.map((movie) => (
                    <Link 
                    key={movie.id}
                    to={`/details/${movie.id}`}
                    className='movieContainer'>
                        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                        alt={movie.title}
                        className='movieImage'
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}