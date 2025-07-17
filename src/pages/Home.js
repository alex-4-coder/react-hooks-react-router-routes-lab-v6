import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../component/NavBar";
import { HttpProxy } from "vite";


function Home() {
  const [movies, setMovies] = useState([]);
    
     useEffect(() => {
       fetch("http://localhost:4000/movies")
         .then((res) => res.json())
         .then(setMovies);
     }, []);

  return (
    <>
      <NavBar />
      <hi> Home Page</hi>
      {movies.map((movie) => (
      <MovieCard Key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default Home;
