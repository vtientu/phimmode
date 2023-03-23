import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import accountsData from "./Data/account.json";
import moviesData from "./Data/movie.json";
import reviewsData from "./Data/review.json";
import categoriesData from "./Data/category.json";
import Detail from "./Pages/Detail";
import Category from "./Pages/Category";
import ListCategory from "./Pages/Admin/ListCategory";
export const Context = React.createContext();

function App() {
  const navigate = useNavigate();
  const Logout = () => {
    sessionStorage.removeItem("user");
    window.location.reload();
    navigate("/");
  };

  const [accounts, setAccount] = React.useState([]);

  const [movies, setMovie] = React.useState([]);

  const [categories, setCategory] = React.useState([]);

  const [reviews, setReviews] = React.useState([]);

  
  const accountLocal = localStorage.getItem("account");
  useEffect(() => {
    if (accountLocal) {
      const account = JSON.parse(accountLocal);
      setAccount(account);
    } else {
      localStorage.setItem("account", JSON.stringify(accountsData));
      setAccount(JSON.parse(localStorage.getItem("account")));
    }
  }, [accountLocal]);

  
  const movieLocal = localStorage.getItem("movie");
  useEffect(() => {
    if (movieLocal) {
      const movie = JSON.parse(movieLocal);
      setMovie(movie);
    } else {
      localStorage.setItem("movie", JSON.stringify(moviesData));
      setMovie(JSON.parse(localStorage.getItem("movie")));
    }
  }, [movieLocal]);

  
  const categoryLocal = localStorage.getItem("category");
  useEffect(() => {
    if (categoryLocal) {
      const category = JSON.parse(categoryLocal);
      setCategory(category);
    } else {
      localStorage.setItem("category", JSON.stringify(categoriesData));
      setCategory(JSON.parse(localStorage.getItem("category")));
    }
  }, [categoryLocal]);


  const reviewLocal = localStorage.getItem("review");
  useEffect(() => {
    if (reviewLocal) {
      const review = JSON.parse(reviewLocal);
      setReviews(review);
    } else {
      localStorage.setItem("review", JSON.stringify(reviewsData));
      setReviews(JSON.parse(localStorage.getItem("review")));
    }
  }, [reviewLocal]);

  return (
    <>
      <Context.Provider
        value={{
          accounts,
          setAccount,
          movies,
          setMovie,
          categories,
          setCategory,
          reviews,
          setReviews,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:cid" element={<Category />} />
          <Route path="/movie/:mid" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<ListCategory/>} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
