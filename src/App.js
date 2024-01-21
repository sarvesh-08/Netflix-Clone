import './App.css';
import react from 'react';
import Row from './Row';
import requests from './requests';
import server from './server';
function App() {

  console.log("inside app")
  
  return (
    <div className='App'>
      <h1>All Movies</h1>
    <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
    <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
     </div>
    
  );
}

export default App;
