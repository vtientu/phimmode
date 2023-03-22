import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "../App";
import Nav from "../Component/Nav";

const Detail = () => {
  const { id } = useParams();
  const LocalContext = React.useContext(Context);
  const movie = LocalContext.movies.find((movie) => movie.id === Number(id));
  const category = LocalContext.categories.find(
    (category) => category.id === movie.cateId
    );

  return (
    <>
      <Nav />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-4">
            <img src={movie.image} alt="movie" style={{ width: "100%" }} />
          </div>
          <div className="col-12 col-sm-8 pl-5">
            <h1>{movie.name}</h1>
            <label className="my-3"><strong>Thể loại: </strong>{category.name}</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
