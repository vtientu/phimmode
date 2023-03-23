import { Link } from "react-router-dom";
import React from "react";
import { Context } from "../App";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  const LocalContext = React.useContext(Context);
  const categories = JSON.parse(localStorage.getItem("category"));
  const movies = JSON.parse(localStorage.getItem("movie"));
  const user = JSON.parse(sessionStorage.getItem("user"));

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <a className="navbar-brand text-light">Phim Hay</a>
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
              <a className="nav-link btn" data-toggle="dropdown">
                Thể Loại
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item btn" to={"/category/all"}>
                  All
                </Link>
                {categories.map((category, index) => {
                  return (
                    <>
                      <Link
                        className="dropdown-item btn"
                        key={index}
                        to={`/category/${category.cateId}`}
                      >
                        {category.name}
                      </Link>
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
                  <li className="nav-item dropdown">
                    <a className="nav-link btn" data-toggle="dropdown">
                      {user.name != ""
                        ? "Tài khoản: " + user.name
                        : user.username}
                    </a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item btn" to={"/admin"}>
                        Manager Movie
                      </Link>
                    </div>
                  </li>
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
