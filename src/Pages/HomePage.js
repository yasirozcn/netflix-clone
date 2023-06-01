import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Rows from '../Components/Rows'
import requests from '../Request'

export default function HomePage() {
  return (
    <>
        <Navbar />
        <Banner />
        <Rows 
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
        />
        <Rows 
            title="TRENDİNG MOVİES"
            fetchUrl={requests.fetchTrending}
        />
        <Rows 
            title="TOP RATED MOVİES"
            fetchUrl={requests.fetchTopRated}
        />
        <Rows 
            title="ACTION MOVİES"
            fetchUrl={requests.fetchActionMovies}
        />
        <Rows 
            title="COMEDY MOVİES"
            fetchUrl={requests.fetchComedyMovies}
        />
        <Rows 
            title="HORROR MOVİES"
            fetchUrl={requests.fetchHorrorMovies}
        />
        <Rows 
            title="ROMANCE MOVİES"
            fetchUrl={requests.fetchRomanceMovies}
        />
        <Rows 
            title="DOCUMENTARİES"
            fetchUrl={requests.fetchDocumentaries}
        />
    </>
  )
}
