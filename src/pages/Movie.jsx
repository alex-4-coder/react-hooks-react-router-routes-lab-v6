import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../component/NavBar";


function Movie() {
   const { id } = useParams();
   const [movie, setMovie ] = useState(null);
    
   useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
    <NavBar/>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {movie.genres.map((genre, index) => (
           <span key={index}>{genre} </span>

        ))}
      </>
  );
};

export default Movie;
