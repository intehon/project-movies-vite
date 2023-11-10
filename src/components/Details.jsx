import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { DETAILS_URL } from '../utils/urls'

export const Details = () => {
    const [details, setDetails] = useState({})
    const [error, setError] = useState(false)
    const { movie_id } = useParams()

    useEffect(() => {
        fetch(DETAILS_URL(movie_id))
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            throw new Error('Network response was not ok.')
        })
        .then((data) => {
                setDetails(data)
            })
        .catch(() => setError(true))
    }, [movie_id])

    if (error) {
        return (
            <div className='errorContainer'>
                <h3>Oops, something went wrong!</h3>
            </div>
        )
    }
    
    const rating = Math.round(details.vote_average) // Using Math.round() to round to the nearest integer

    return (
        <section 
        className='posterBackground'
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`}} >
            <div className='detailsContainer'>
                <div className='movieDetailsContainer'>
                    <img
                    className='movieDetailsPoster'
                    src={`https://image.tmdb.org/t/p/w342${details.poster_path}`}
                    alt={details.title}
                    />
                    <div className='movieDetailsText'>
                    <h2>{details.title} {" "}
                    <span className="rating">{rating}/10</span>
                    </h2>
                    <p>{details.overview}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}