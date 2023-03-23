import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const Category = () => {
  const LocalCategory = JSON.parse(localStorage.getItem("category"));
  const [categories, setCategory] = React.useState(LocalCategory);
  const LocalMovie = JSON.parse(localStorage.getItem("movie"));
  const LocalReview = JSON.parse(localStorage.getItem("review"));

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      const newCategories = LocalCategory.filter(
        (category) => category.cateId !== id
      );
      localStorage.removeItem("category");
      localStorage.setItem("category", JSON.stringify(newCategories));
      setCategory(newCategories);

      LocalMovie.map((movie) => {
        if (movie.cateId === id) {
          handleDeleteReview(movie.movieID);
        }
      });

      const newMovies = LocalMovie.filter((movie) => movie.cateId !== id);
      localStorage.removeItem("movie");
      localStorage.setItem("movie", JSON.stringify(newMovies));
      console.log(newMovies);
      console.log(newCategories);
    }
  };

  const handleDeleteReview = (id) => {
    const newReviews = LocalReview.filter((review) => review.movieID !== id);
    localStorage.removeItem("review");
    localStorage.setItem("review", JSON.stringify(newReviews));
  };

  return (
    <div className="col-9 mt-5">
      <h1 className="mb-5">List Category</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>ID</td>
            <td>Category Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category.cateId}</td>
              <td>{category.name}</td>
              <td>
                <button type="button" className="btn btn-primary mr-3">
                  <AiOutlineEdit />
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(category.cateId)}
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

export default Category;
