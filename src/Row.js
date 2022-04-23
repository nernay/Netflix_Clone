import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

// importing the row css file we have

const baseURL = "https://image.tmdb.org/t/p/original/";
// a snippet of code which runs based on a specific 
function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // a snippet of code which runs based on a specific condition
  // useeffect
  useEffect(() => {
    // if [], run once when the row loads , and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // it will get the data from this following api we hav
      //https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
    const opts = {
      height: "390",
      width: "100%",
      playerVars:{
         // https://developers.google.com/youtube/player_parameters 
         autoplay:1,
      },
  };

  const handleClick = (movie) => {
      if (trailerUrl) {
          setTrailerUrl('');
      }
      else{
          movieTrailer(movie?.name || "")
          .then((url) => {
            // https://www.youtube.com/watch?v=43e8dPUt7RY
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));

          })
          .catch(error => console.log(error))
      }


  }
  // we have to render the movie in the screen we hav
  return (
    <div className="row">
      {/*title */}
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row__poster(s) */}

        {movies.map((movie) => (
          <img 
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* && means than */}
     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}


    </div>
  );
}

export default Row;
