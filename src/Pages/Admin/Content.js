import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./Category";
import Movie from "./Movie";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </>
  );
};

export default Content;
