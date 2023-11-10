import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MoviesList } from './components/MoviesList'
import { Details } from './components/Details'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/details/:movie_id" element={<Details />} /> 
      </Routes>
    </BrowserRouter>
  )
}