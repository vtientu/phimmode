import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Nav from "../Component/Nav";

const Category = () => {
  const { cid } = useParams();
  const [movies, setMovie] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);

  const LocalMovies = JSON.parse(localStorage.getItem("movie"));
  const LocalReviews = JSON.parse(localStorage.getItem("review"));

  const coverageRate = (mid) => {
    let count = 0;
    let total = 0;
    LocalReviews.forEach((review) => {
      if (review.movieID === mid) {
        count++;
        total += Number(review.score);
        console.log(total);
      }
    });
    return total / count;
  };

  React.useEffect(() => {
    if (cid !== "all") {
      const moviesCate = LocalMovies.filter((movie) => movie.cateId == cid);
      console.log(moviesCate);
      setMovie(moviesCate);
    } else {
      setMovie(JSON.parse(localStorage.getItem("movie")));
    }
  }, [cid]);

  console.log(movies);

  return (
    <>
      <Nav />
      <div className="container" style={{marginTop: '100px'}}>
        <h1 className="title">Danh sách phim</h1>
        <div className="row overflow-scroll">
          {movies.map((movie, index) => (
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
                  <Link
                    className="btn btn-outline-danger my-3"
                    to={`/movie/${movie.id}`}
                  >
                    Đánh giá
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
