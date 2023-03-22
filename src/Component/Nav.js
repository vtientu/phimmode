import { Link } from "react-router-dom";
import React from "react";
import { Context } from "../App";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  const LocalContext = React.useContext(Context);
  const { categories, movies } = LocalContext;
  const user = JSON.parse(sessionStorage.getItem("user"));

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav-bg");
    nav.classList.toggle("bg-black", window.scrollY > 0);
  });

  const searchInput = React.useRef();
  const handleSearch = () => {
    movies.map((m) => {
      const resultSearch = movies.filter((m) =>
        m.name.toLowerCase().includes(searchInput.current.value.toLowerCase())
      );
      LocalContext.setMovie(resultSearch);
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark nav-bg fixed-top">
        <a className="navbar-brand" href="#">
          Phim Hay
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon">icon</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" data-toggle="dropdown">
                Thể Loại
              </a>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item btn"
                  onClick={() => {
                    LocalContext.setMovie(
                      JSON.parse(localStorage.getItem("movie"))
                    );
                  }}
                >
                  All
                </a>
                {categories.map((category, index) => {
                  return (
                    <>
                      <a
                        className="dropdown-item btn"
                        key={index}
                        onClick={() => {
                          LocalContext.setMovie(
                            movies.filter(
                              (m) => m.cateId == category.cateId
                            )
                          );
                        }}
                      >
                        {category.name}
                      </a>
                    </>
                  );
                })}
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 mr-4">
            <input
              ref={searchInput}
              onChange={handleSearch}
              className="form-control  mr-sm-2"
              type="text"
              placeholder="Enter a name ..."
            />
            <FaSearch className="text-light"></FaSearch>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item">
              {user ? (
                <>
                  <a className="nav-link" href="#">
                    {user.name != ""
                      ? "Tài khoản: " + user.name
                      : user.username}
                  </a>
                </>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {user ? (
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              ) : (
                <Link className="nav-link" to="/signup">
                  Register
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
