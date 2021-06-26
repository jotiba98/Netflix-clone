const API_KEY="0d0258ba92b8e7d4c9e3038951f9a040";
export default{
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&withgenres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&withgenres=35`,
    fetchHorrerMovies:`/discover/movie?api_key=${API_KEY}&withgenres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&withgenres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&withgenres=99`,
}