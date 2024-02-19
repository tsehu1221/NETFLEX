// import React ,{ useState, useEffect } from 'react';
// import './Row.css';
// import axios from '../../axios';
// import YouTube from 'react-youtube';
// import movieTrailer  from  "movie-trailer";

// const base_url = 'https://image.tmdb.org/t/p/original/';
//  function Row({ title, fetchurl, isLargeRow }) {
// const [movies, setMovies] = useState([]);
// const [trailerurl, setTrailerurl]=useState("");

//   useEffect(() => {
//     async function fetchData() {
      
//         const request= await axios.get(fetchurl);
      
//         setMovies(request.data.results);
//         return request;
//     }

//     fetchData();
//   } ,[fetchurl]);
//   // console.log(movies);
//   const ops ={
//     height:"390",
//     width:"100%",
//     playervars:{
//       autoplay:1 ,
//     },
//   };
// const handleclick = (movie) =>{
//   if(trailerurl){
//     setTrailerurl("");
//   }
//    else{
//     movieTrailer(movie?.title||movie?.name||movie?.original_name)
  
// .then((url) =>{
//   const urlparams =new URLSearchParams(new URL(url).search)
//   setTrailerurl(urlparams.get("V"));
// } )

 
// .catch((error)=>console.log(error));}
// };
// // console.log(movies);
//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row__posters">
//         {movies.map((movie) => (
//           <img
//             onClick={() => handleclick(movie)}
            
//             className={`row__poster  ${isLargeRow && "row__posterLarge" }`}
      
//              src={`${base_url}${isLargeRow ? movie.poster_path :movie.backdrop_path}`}
//             alt={movie.name} 
    
//             />

//         ))}
//       </div>
//      {/* <div style={{ padding:"40px"}}>

//      {trailerurl && {youtube} videoId={trailerurl}  opts={opts}
// </div>
//      */}
//      <div style={{ padding: '40px' }}>
//         {trailerurl && <YouTube videoId={trailerurl} opts={ops} />} {/* Correct component name */}
//       </div>
    
//     </div>
//   );
   
// }
 
//  export default Row;


import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchurl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(fetchurl);
        if (isMounted) {
          setMovies(response.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchurl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    try {
      if (trailerUrl) {
        setTrailerUrl('');
      } else {
        const url = await movieTrailer(movie?.title || movie?.name || movie?.original_name);
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge" }`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && (
        <div style={{ padding: '40px' }}>
         {trailerUrl}&& <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
}

export default Row;