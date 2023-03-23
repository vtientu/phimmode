import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../Component/Nav";

const Detail = () => {
  const { mid } = useParams();
  const movies = JSON.parse(localStorage.getItem("movie"));
  const categories = JSON.parse(localStorage.getItem("category"));
  const reviews = JSON.parse(localStorage.getItem("review"));
  const movie = movies.find((movie) => movie.id === Number(mid));
  const category = categories.find((c) => c.cateId === movie.cateId);

  const [reviewShow, setReviewShow] = React.useState(reviews);

  const user = JSON.parse(sessionStorage.getItem("user"));

  const scoreRef = React.useRef();
  const cmtRef = React.useRef();

  const handleReview = () => {
	  const messageRe = document.getElementById("messageReview");
	if (scoreRef.current.value.length == 0 || cmtRef.current.value.length == 0) {
		messageRe.style.display = "block";
		messageRe.style.color = "red";
		messageRe.innerHTML = "Vui lòng nhập đầy đủ thông tin";
		return;
	}
	if (scoreRef.current.value < 0 || scoreRef.current.value > 10) {
		messageRe.style.display = "block";
		messageRe.style.color = "red";
		messageRe.innerHTML = "Điểm đánh giá phải từ 0 đến 10";
		return;
	}
    const accounts = JSON.parse(sessionStorage.getItem("user"));
    const review = {
      id: reviews.length + 1,
      accountID: user.accountID,
      movieID: movie.id,
      score: scoreRef.current.value,
      cmt: cmtRef.current.value,
    };
	reviews.map((r) => {
		if (r.accountID === user.accountID) {
			r.score = scoreRef.current.value;
			r.cmt = cmtRef.current.value;
		}
	})
	messageRe.style.display = "block";
	messageRe.style.color = "green";
	messageRe.innerHTML = "Đánh giá thành công";
    localStorage.setItem("review", JSON.stringify(reviews));
	setReviewShow(reviews);
  };

  const getAccountReview = (id) => {
    const accounts = JSON.parse(localStorage.getItem("account"));
    const account = accounts.find((a) => a.accountID === id);
    return account;
  };

  const getReviewed = (aid) => {
    const reviewed = reviews.find((r) => r.accountID === Number(aid));
    return reviewed;
  };

  return (
    <>
      <Nav />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-4">
            <img src={movie.image} alt="movie" style={{ width: "100%" }} />
          </div>
          <div className="col-12 col-sm-8 pl-5">
            <div className="my-3">
              <h1>{movie.name}</h1>
              <h3 className="my-5">
                <strong>Thể loại: </strong>
                {category.name}
              </h3>
              <p style={{ fontSize: "25px" }}>{movie.description}</p>
            </div>
            <div className="my-5 border-top pt-3">
              {user ? (
                <>
                  <h3>Chi tiết đánh giá</h3>
                  <div className="input-group align-content-center d-flex mt-4">
                    <label htmlFor="score" className="col-2 p-0 m-0">
                      Điểm đánh giá:
                    </label>
                    <input
                      type="number"
                      className="form-control col-3"
                      ref={scoreRef}
                      id="score"
					  defaultValue={user ? getReviewed(user.accountID).score : ""}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="comment">Bình luận:</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      id="comment"
                      ref={cmtRef}
					  defaultValue={user ? getReviewed(user.accountID).cmt : ""}
                    >
                    </textarea>
                  </div>
				  <p id="messageReview" style={{display: 'none'}}>
				  </p>
                  <button onClick={handleReview} className="btn btn-primary">Đánh giá</button>
                </>
              ) : (
                <Link to="/login" className="btn btn-primary">
                  Đánh giá
                </Link>
              )}

              <div className="my-5 border-top pt-5">
                <h3>Bình luận</h3>
                {reviewShow.map((r, index) => {
                  return (
                    <p key={index}>
                      <strong className="mr-3 my-5">
                        {getAccountReview(r.accountID).name}:
                      </strong>
                      {r.cmt}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
