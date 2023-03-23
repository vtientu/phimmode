import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const Movie = () => {
    const LocalMovie = JSON.parse(localStorage.getItem("movie"));
    const [movies, setMovie] = React.useState(LocalMovie);

    const handleDelete = (id) => {
    }

  return (
    <div className="col-9 mt-5">
      <h1 className="mb-5">List Category</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>ID</td>
            <td>Movie Name</td>
            <td>Publish Year</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.id}</td>
              <td>{movie.name}</td>
              <td>{movie.year}</td>
              <td>
                <button type="button" className="btn btn-primary mr-3">
                  <AiOutlineEdit />
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(movie.id)}
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movie;
