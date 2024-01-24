import React, { useInsertionEffect } from 'react'
import server from './server';
import requests from './requests';
import {useState,useEffect} from "react";


function Banner() {
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request =await server.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random()*(request.data.results.length-1))
            ]);
            
            return movie;
        }
        fetchData();  
    },[]);
    console.log(movie);
  return (
    <header>
      
    </header>
  )
}

export default Banner
