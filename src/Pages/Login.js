import React from "react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import data from "../Data/account.json";
const Login = () => {
  const navigate = useNavigate();
  const [account] = React.useState(data);

  React.useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      navigate("/");
    }
  }, []);

  const userRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmitUser = () => {
    const userValue = userRef.current.value;
    const userName = document.querySelector("#username");
    const userCheck = account.find((item) => item.userName == userValue);
    if (userCheck) {
      userName.style.border = "1px solid green";
      userName.style.boxShadow = "0 0 5px green";
    } else {
      userName.style.border = "1px solid red";
      userName.style.boxShadow = "0 0 5px red";
    }
  };

  const handleSubmit = () => {
    const userValue = userRef.current.value;
    const passwordValue = passwordRef.current.value;
    
    const messagePassword = document.querySelector("#messagePassword");
    const messageUser = document.querySelector("#messageUser");
    const messageLogin = document.querySelector("#messageLogin");
    const user = account.find(
      (item) => item.userName == userValue && item.password == passwordValue
    );

    if(userValue == "") {
      messageUser.style.display = "block";
      messageUser.innerHTML = "UserName không được để trống";      
    }

    if(passwordValue == "") {
      messagePassword.style.display = "block";
      messagePassword.innerHTML = "Password không được để trống";
    }

    if (!user) {
      messageLogin.style.display = "block";
      messageUser.innerHTML="";
      messagePassword.innerHTML="";
      messageLogin.innerHTML = "User hoặc password không đúng";
    } else {
      sessionStorage.setItem("user", JSON.stringify(user));
      console.log(sessionStorage.getItem("user"));
      window.location.reload();
      navigate("/");
      console.log("Đăng nhập thành công");
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
                        Sign In to <strong>Phim Mode</strong>
                      </h3>
                    </div>
                    <div className="form-group first">
                      <label htmlFor="username">Username</label>
                      <input
                        onInput={handleSubmitUser}
                        ref={userRef}
                        type="text"
                        className="form-control"
                        id="username"
                      />
                    </div>
                    
                    <p id="messageUser" style={{display:"none", color: "red"}}></p>
                    
                    <div className="form-group last mb-4">
                      <label htmlFor="password">Password</label>
                      <input
                        ref={passwordRef}
                        type="password"
                        className="form-control"
                        id="password"
                      />
                    </div>
                    <p id="messagePassword" style={{display: "none", color: "red"}}></p>
                    <div className="d-flex mb-5 align-items-center">
                      <label className="control control--checkbox mb-0">
                        <span className="caption">
                          <a href="#" className="forgot-pass">
                            Forgot Password
                          </a>
                        </span>
                      </label>
                      <span className="ml-auto">
                        <Link to="/signup" className="forgot-pass">
                          Create new account
                        </Link>
                        ?
                      </span>
                    </div>
                    <p id="messageLogin" style={{display:"none", color: "red"}}></p>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="btn btn-pill text-white btn-block btn-primary"
                    >Login</button>
                    <span className="d-block text-center my-4 text-muted">
                      {" "}
                      or sign in with
                    </span>
                    <div className="social-login text-center">
                      <a href="#" className="facebook">
                        <span className="mr-3">
                          <FaFacebook />
                        </span>
                      </a>
                      <a href="#" className="twitter">
                        <span className="mr-3">
                          <FaTwitter />
                        </span>
                      </a>
                      <a href="#" className="google">
                        <span className="mr-3">
                          <FaGoogle />
                        </span>
                      </a>
                    </div>
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

export default Login;
