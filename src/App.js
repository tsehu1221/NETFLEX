import './App.css';
import Banner from './component/Banner/Banner';
import Nav from './component/Nav/Nav';
import Row from './component/Row/Row';
import requests from  './requests';
function App() {
  return (
    <div className="App">
      <h1>Evangadi family</h1>
      <Nav/>
    <Banner/> 
      <Row title="NetflixOriginals" fetchurl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending" fetchurl={requests.fetchTrending} />
       <Row title="Top Rated Movies" fetchurl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} /> 
    </div>
  );
}

export default App;
