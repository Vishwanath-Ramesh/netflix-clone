import React from 'react'

import MovieSlider from '../MovieSlider/MovieSlider'
import Banner from '../Banner/Banner'
import './Content.css'

const Content = () => {
  return (
    <div className="content">
      <Banner />
      <MovieSlider category="popular" header="Popular" />
      <MovieSlider category="top_rated" header="Top Rated" />
      <MovieSlider genre={28} header="Action" />
      <MovieSlider genre={53} header="Thriller" />
      <MovieSlider genre={35} header="Comedy" />
      <MovieSlider genre={80} header="Crime" />
      <MovieSlider genre={18} header="Drama" />
      <MovieSlider genre={99} header="Documentary" />
      <MovieSlider genre={10749} header="Romance" />
      <MovieSlider genre={878} header="Science Fiction" />
      <MovieSlider genre={10752} header="War" />
      <MovieSlider genre={37} header="Western" />
    </div>
  )
}

export default Content
