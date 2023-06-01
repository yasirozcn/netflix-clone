import React from 'react'
import '../styles/rows.css'
import axios from '../axios'
import { useState, useEffect } from 'react'

function Rows(props) {
  const baseURL = 'https://image.tmdb.org/t/p/original/'
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [props.fetchUrl]);
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img className='posters__images' src={`${baseURL}${props.isLargeRow ? movie.backdrop_path : movie.poster_path }`} alt={movie.name} />
        ))}
      </div>
    </div>
  )
}

export default Rows