
import './App.css';
import Row from "./Row";
import request from "./request"
import Banner from "./Banner";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Banner/>
     <Row title="NETFLIX ORIGINALS" 
     fetchURL={request.fetchNetflixOriginals}
     isLargeRow
     />
     <Row title="Trending Now" fetchURL={request.fetchTrending}/>
     <Row title="Top Rated" fetchURL={request.fetchTopRated}/>
     <Row title="Action Movies" fetchURL={request.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchURL={request.fetchHorrerMovies}/>
     <Row title="Romance Movies" fetchURL={request.fetchRomanticMovies}/>
     <Row title="Documentaries" fetchURL={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
