import { Link } from 'react-router-dom'
import { Header } from './Header'

export const MoviesList = ({ movies, select, setSelect }) => {
    return (
        <>
            <Header select={select} setSelect={setSelect} />
            <section>
                <h2>Movie List:</h2>
                <div className='moviesListContainer'>
                    {movies.map((movie) => (
                        <Link 
                        key={movie.id}
                        to={`/movie/${movie.id}`}
                        className='movieContainer'>
                            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                            alt={movie.title}
                            className='movieImage'
                            />
                            <div className='movieOverlay'>
                                <h1>{movie.title}</h1>
                                <p>Release date: {movie.release_date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}