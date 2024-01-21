import React, { useState ,useEffect} from "react";
import server from "./server"
import "./Row.css";
const base_url="https://image.tmdb.org/t/p/original/";

function Row ({title,fetchURL}){
    
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
      async function fetchData(){
         const request =await server.get(fetchURL);
         console.log(request);
         setMovies(request.data.results);
      return request;
      console.log("useeffect");
      }
      fetchData();
     // console.log(request);
  },[fetchURL]);
   
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
               {movies.map(movie=>(
                 <img className="row__poster" src={`${base_url}${movie.poster_path}`}  alt={movie.name}/>
              ))}
           </div>
        </div>
    )
}

export default Row
