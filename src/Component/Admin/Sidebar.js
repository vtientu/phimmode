import React from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { FaHome, FaUser } from "react-icons/fa";
import { BiCategory, BiMoviePlay } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";

const Sidebar = () => {
  return (
    <>
      <div className="row" id="body-row">
        <div
          id="sidebar-container"
          className="sidebar-expanded d-none d-md-block"
        >
          <ul className="list-group">
            <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
              <small>Phim Mode</small>
            </li>
            <a
              className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-start align-items-center">
                <FaHome className="mr-3"></FaHome>
                <span className="menu-collapsed">Back to Phim Mode</span>
                <span className="submenu-icon ml-auto"></span>
              </div>
            </a>
            
            <a
              data-toggle="collapse"
              aria-expanded="false"
              className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-start align-items-center">
                <BiCategory className="mr-3"></BiCategory>
                <span className="menu-collapsed">Category</span>
                <span className="submenu-icon ml-auto"></span>
              </div>
            </a>
            <div id="submenu2" className="collapse sidebar-submenu">
              <a
                className="list-group-item list-group-item-action bg-dark text-white"
              >
                <span className="menu-collapsed">List Category</span>
              </a>
              <a
                className="list-group-item list-group-item-action bg-dark text-white"
              >
                <span className="menu-collapsed">Create Category</span>
              </a>
            </div>

            <a
              data-toggle="collapse"
              aria-expanded="false"
              className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-start align-items-center">
                <BiMoviePlay className="mr-3"></BiMoviePlay>
                <span className="menu-collapsed">Movies</span>
                <span className="submenu-icon ml-auto"></span>
              </div>
            </a>
            <div id="submenu3" className="collapse sidebar-submenu">
              <a
                href="#"
                className="list-group-item list-group-item-action bg-dark text-white"
              >
                <span className="menu-collapsed">List Movie</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action bg-dark text-white"
              >
                <span className="menu-collapsed">Create Movie</span>
              </a>
            </div>
            <a
              className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-start align-items-center">
                <FaUser className="mr-3"></FaUser>
                <span className="menu-collapsed"><Link to="/admin/list-member" >Member</Link></span>
                <span className="submenu-icon ml-auto"></span>
              </div>
            </a>
            
            <li className="list-group-item sidebar-separator menu-collapsed"></li>
            <a
              href="#"
              className="bg-dark list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-start align-items-center">
                <GoSignOut className="mr-3"></GoSignOut>
                <span className="menu-collapsed">Logout</span>
              </div>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
