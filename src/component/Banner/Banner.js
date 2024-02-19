import React,{useEffect,useState} from 'react'
import "./Banner.css";

import axios from "../../axios"
import requests from '../../requests';
function Banner() {
  const [movie,setMovie]=useState([]);
  
    
     
     useEffect(() => {
      async function   fetchData(){
      
        const request=await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request?.data.results[
            Math.floor(Math.random()*request.data.results.length)
          ]
        );
        return request;
      }         

fetchData();
       },   []);
    console.log(movie);

function truncate(str,n){
  return str?.length>n? str.substr(0,n-1) + "...":str;
}



    return(

     <header 
     className='banner'
     style={{ 
      backgroundsize:"cover",
      backgroundImage:`url( "https://image.tmdb.org/t/p/original/${movie?.backdrop_path} " )`,
      backgroundPosition:"center center",
      }}>

<div className='banner__contents'>
  <h1 className='banner__title'>
    {movie?.title||movie?.name||movie.original_name}
  </h1>
  <div className='banner__button'>
    <button className='banner__button'>play</button>
    <button className='banner__button'>my list</button>
  </div>
  <h1 className='banner__description'> {truncate(movie?.overview,150)} </h1>
</div>
<div className='banner__fadeBottom'/>


      </header>
    );
     
    }
  
     
          
     
 
     
      
      
      
      
      
      
      
      
      
   

export default Banner;


// import React, { useEffect, useState } from 'react';
// import axios from '../../requests'; // Assuming this is the correct import path for your requests file

// function Banner() {
//   const [movie, setMovie] = useState(null); // Initialize movie state with null

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const requests = await axios.get(requests.fetchNetflixOriginals);
//         const randomIndex = Math.floor(Math.random() * requests.data.results.length);
//         setMovie(requests.data.results[randomIndex]);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []); // Empty dependency array ensures useEffect runs only once on component mount

//   console.log(movie);

//   return (
//     <div>
//       <h1>Banner</h1>
//       {/* Render movie details here */}
//     </div>
//   );
// }

// export default Banner;
