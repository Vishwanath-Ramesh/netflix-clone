import React from 'react'
import PropTypes from 'prop-types'

import MovieTile from '../MovieTile/MovieTile'
import getAPIData from '../../../models/api/api'
import apiEndPoint from '../../../models/api/apiEndPoint'
import './MovieSlider.css'

const MovieSlider = ({ category, header, genre }) => {
  const [moviesList, setMoviesList] = React.useState()

  React.useEffect(() => {
    async function fetchData() {
      let response = null

      if (genre) {
        response = await getAPIData(
          apiEndPoint.getByGenre.method,
          `${apiEndPoint.getByGenre.url}?with_genres=${genre}`,
          null,
          genre,
        )
      } else
        response = await getAPIData(
          apiEndPoint.getByCategory.method,
          `${apiEndPoint.getByCategory.url}/${category}`,
        )
      setMoviesList(response.data.results)
    }
    fetchData()
  }, [])

  return (
    <div className="movieslider">
      <label className="movieslider__header">{header}</label>
      <div className="movieslider__content">
        {moviesList &&
          moviesList.map((movie) => {
            return <MovieTile key={movie.title} movie={movie} />
          })}
      </div>
    </div>
  )
}

MovieSlider.propTypes = {
  category: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  genre: PropTypes.number,
}

export default MovieSlider
