import React from 'react'
import Button from '@material-ui/core/Button'
import {
  PlayArrow as PlayArrowIcon,
  InfoOutlined as InfoIcon,
} from '@material-ui/icons'

import getAPIData from '../../../models/api/api'
import './Banner.css'

const Banner = () => {
  const [bannerItem, setBannerItem] = React.useState()

  React.useEffect(() => {
    async function fetchData() {
      const response = await getAPIData('get', `/movie/now_playing`)
      const randomMovieIndex = Math.floor(
        Math.random() * (response.data.results.length - 1),
      )

      setBannerItem(response.data.results[randomMovieIndex])
    }
    fetchData()
  }, [])

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerItem?.backdrop_path})`,
      }}
    >
      <div className="banner__content">
        <label className="banner__title">{bannerItem?.title}</label>
        <label className="banner__overview">{bannerItem?.overview}</label>
        <div className="banner__actions">
          <Button
            disableRipple
            variant="contained"
            size="large"
            className="banner__play"
            startIcon={<PlayArrowIcon />}
          >
            Play
          </Button>
          <Button
            disableRipple
            variant="contained"
            size="large"
            className="banner__info"
            startIcon={<InfoIcon />}
          >
            More Info
          </Button>
        </div>
      </div>
      <div className="banner__fade"></div>
    </header>
  )
}

export default Banner
