import React, { Component } from "react";

const Header = () => {
    return (
      <>
        <div className="header mt-5">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
            data-interval="3500"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 banner-img"
                  src="https://chieuphimquocgia.com.vn/Themes/RapChieuPhim/Content/content.v2/images/KhoaChatCuaNao_Slider.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 banner-img"
                  src="https://chieuphimquocgia.com.vn/Themes/RapChieuPhim/Content/content.v2/images/Shazam_Slider.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 banner-img"
                  src="https://chieuphimquocgia.com.vn/Themes/RapChieuPhim/Content/content.v2/images/TamVeDinhMenh_Slider.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </>
    );
  }


export default Header;
