import React from "react";
import { Link } from "react-router-dom";
import data from "../Data/account.json";

const Signup = () => {
  const [account] = React.useState(data);
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const rePasswordRef = React.useRef();
  const usernameRef = React.useRef();
  const fullNameRef = React.useRef();

  const ValidateUserName = () => {
    const userValue = usernameRef.current.value;
    const userName = document.querySelector("#username");
    const userCheck = account.find((item) => item.userName == userValue);
    if (!userCheck) {
      userName.style.border = "1px solid green";
      userName.style.boxShadow = "0 0 5px green";
    } else {
      userName.style.border = "1px solid red";
      userName.style.boxShadow = "0 0 5px red";
    }
  };

  const ValidateEmail = () => {
    const emailValue = emailRef.current.value;
    const emailInput = document.querySelector("#email");
    const emailCheck = account.find((item) => item.email == emailValue);
    if (!emailCheck) {
      emailInput.style.border = "1px solid green";
      emailInput.style.boxShadow = "0 0 5px green";
    } else {
      emailInput.style.border = "1px solid red";
      emailInput.style.boxShadow = "0 0 5px red";
    }
  };

  return (
    <>
      <div className="content my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="form-block">
                    <div className="mb-4">
                      <h3>
                        Register account <strong>Phim Mode</strong>
                      </h3>
                    </div>
                    <div className="form-group first">
                      <label htmlFor="fullname">
                        Full Name<i style={{ color: "red" }}>*</i>
                      </label>
                      <input
                        ref={fullNameRef}
                        type="text"
                        className="form-control"
                        id="fullname"
                      />
                    </div>
                    <div className="form-group first">
                      <label htmlFor="username">
                        Username<i style={{ color: "red" }}>*</i>
                      </label>
                      <input
                        onInput={ValidateUserName}
                        ref={usernameRef}
                        type="text"
                        className="form-control"
                        id="username"
                      />
                    </div>

                    <div className="form-group first">
                      <label htmlFor="email">
                        Email<i style={{ color: "red" }}>*</i>
                      </label>
                      <input
                        ref={emailRef}
                        onInput={ValidateEmail}
                        type="text"
                        className="form-control"
                        id="email"
                      />
                    </div>

                    <p
                      id="messageEmail"
                      style={{ display: "none", color: "red" }}
                    ></p>

                    <div className="form-group last mb-4">
                      <label htmlFor="password">
                        Password<i style={{ color: "red" }}>*</i>
                      </label>
                      <input
                        ref={passwordRef}
                        type="password"
                        className="form-control"
                        id="password"
                      />
                    </div>
                    <div className="form-group last mb-4">
                      <label htmlFor="re-password">
                        Confirm Password<i style={{ color: "red" }}>*</i>
                      </label>
                      <input
                        type="password"
                        ref={rePasswordRef}
                        className="form-control"
                        id="re-password"
                      />
                    </div>
                    <p
                      id="messagePassword"
                      style={{ display: "none", color: "red" }}
                    ></p>
                    <div className="d-flex mb-5 align-items-center">
                      <span className="ml-auto">
                        Do you have a account?
                        <Link to="/login" className="forgot-pass">
                          Login
                        </Link>
                      </span>
                    </div>
                    <p
                      id="messageLogin"
                      style={{ display: "none", color: "red" }}
                    ></p>
                    <button
                      type="button"
                      className="btn btn-pill text-white btn-block btn-primary"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
