import React from "react";
import "../styles/banner.css";
import { BiPlay } from "react-icons/bi";
import { RiInformationLine } from "react-icons/ri";
import { useState , useEffect } from "react";
import axios from "../axios";
import requests from "../Request";

function Banner() {

    const [movie,setMovie] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const response = await axios.get(requests.fetchNetflixOriginals);
      console.log(response)
      setMovie(response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
      ]);
      return response;
    }
    fetchData();
  },[])
 
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.name}</h1>
        <h1 className="banner__description">
          {movie.overview}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">
            <BiPlay className="banner__icons" /> Oynat
          </button>
          <button className="banner__button">
            <RiInformationLine className="banner__icons" /> Daha fazla bilgi
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
