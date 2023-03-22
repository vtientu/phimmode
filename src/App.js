import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Nav from "./Component/Nav";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import accountsData from "./Data/account.json";
import moviesData from "./Data/movie.json";
import reviewsData from "./Data/review.json";
import categoriesData from "./Data/category.json";
export const Context = React.createContext();

function App() {
  const navigate = useNavigate();
  const Logout = () => {
    sessionStorage.removeItem("user");
    window.location.reload();
    navigate("/");
  };
  

  const [accounts, setAccount] = React.useState(
    JSON.parse(localStorage.getItem("account"))
  );

  const [movies, setMovie] = React.useState(
    JSON.parse(localStorage.getItem("movie"))
  );

  const [categories, setCategory] = React.useState(
    JSON.parse(localStorage.getItem("category"))
  );

  const [reviews, setReviews] = React.useState(
    JSON.parse(localStorage.getItem("review"))
  );
  useEffect(() => {
    const accountLocal = localStorage.getItem("account");
    if (accountLocal) {
      const account = JSON.parse(accountLocal);
      setAccount(account);
    } else {
      localStorage.setItem("account", JSON.stringify(accountsData));
    }
  }, []);

  useEffect(() => {
    const movieLocal = localStorage.getItem("movie");
    if (movieLocal) {
      const movie = JSON.parse(movieLocal);
      setMovie(movie);
    } else {
      localStorage.setItem("movie", JSON.stringify(moviesData));
    }
  }, []);

  useEffect(() => {
    const categoryLocal = localStorage.getItem("category");
    if (categoryLocal) {
      const category = JSON.parse(categoryLocal);
      setCategory(categoryLocal);
    } else {
      localStorage.setItem("category", JSON.stringify(categoriesData));
    }
  }, []);

  useEffect(() => {
    const reviewLocal = localStorage.getItem("review");
    if (reviewLocal) {
      const review = JSON.parse(reviewLocal);
      setReviews(review);
    } else {
      localStorage.setItem("review", JSON.stringify(reviewsData));
    }
  }, []);

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
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
