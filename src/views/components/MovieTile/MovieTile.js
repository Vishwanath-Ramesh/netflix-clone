import React from 'react'
import PropTypes from 'prop-types'

import './MovieTile.css'

const MovieTile = ({ movie }) => {
  return (
    <img
      className="movietile"
      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
      alt={movie.title}
    />
  )
}

MovieTile.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MovieTile
