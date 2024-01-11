const API_KEY=bd0550a851fa9b659478ce4a8f9bfcd1

const requests ={
    fetchTrending:`/trending/all/weeks?api_key=${API_KEY}&language=en-US`,
    fetchNetflix:`/discover/movie/weeks?api_key=${API_KEY}&with_networks=213`,
    fetTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movieapi_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests;