import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";
import Header from "../Component/Header";
import Nav from "../Component/Nav";

const Home = () => {
  const LocalContext = React.useContext(Context);

  const coverageRate = (mid) => {
    let count = 0;
    let total = 0;
    LocalContext.reviews.forEach((review) => {
      if (review.movieID === mid) {
        count++;
        total += Number(review.score);
        console.log(total);
      }
    });
    return total / count;
  };

  return (
    <>
      <Nav />
      <Header />
      <div className="container mt-5" style={{ height: "800px" }}>
        <h1 className="title">Danh sách phim</h1>
        <div className="row overflow-scroll">
          {LocalContext.movies.map((movie, index) => (
            <div key={index} className="col-12 col-md-3 p-3">
              <div className="card m-2 movie_item">
                <img
                  className="movie-img"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                  }}
                  src={movie.image}
                  alt="Avatar"
                />
                <div className="movie_hover py-4">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="card-text ">
                    Rating: {coverageRate(movie.id) || "0"}
                  </p>
                  <Link className="btn btn-outline-danger my-3" to={`/movie/${movie.id}`}>Đánh giá</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
