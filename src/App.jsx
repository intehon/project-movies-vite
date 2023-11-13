import { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MoviesList } from './components/MoviesList'
import { Details } from './components/Details'
import { POPULAR_URL, TOP_URL, UPCOMING_URL, NOW_URL } from './utils/urls'

export const App = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [select, setSelect] = useState('')
  let URL = POPULAR_URL

  if (select === 'top') {
    URL = TOP_URL
  } else if (select === 'upcoming') {
    URL = UPCOMING_URL
  } else if (select === 'popular') {
    URL = POPULAR_URL
  } else if (select === 'now') {
    URL = NOW_URL
  }

  useEffect(() => { 
    setLoading(true)
    fetch(URL)
    .then((res) => res.json())
    .then((data) => setMovies(data.results))
    .finally(() => setTimeout(() => setLoading(false), 1000)
  )}, [select, URL])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList  movies={movies} loading={loading} select={select} setSelect={setSelect} />} />
        <Route path="/movie/:movie_id" element={<Details />} /> 
      </Routes>
    </BrowserRouter>
  )
}