import { useState, useEffect } from "react";
import RatingCreate from "../common/RatingCreate";
import RatingRead from "../common/RatingRead";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import "../../styles/rating.create.module.scss";
import Call from "./Call";
import Router from "next/router";

function Review(props) {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    Call.getReview(props.product)
      .then(d => {
        let { data } = d;
        setRating(data.rating);
        setText(data.text);
      })
      .catch(error => {
        console.log(error);
      });

    get();
  }, []);

  let get = () => {
    Call.listReview(props.product)
      .then(d => {
        let {
          data: { data }
        } = d;
        // data = data.filter(e => review._id != e._id);
        setReviews(data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  let handleCreate = num => {
    setRating(num);
  };

  let handleChange = e => {
    setText(e.target.value);
  };

  let handleSubmit = e => {
    e.preventDefault();
    if (rating < 1) {
      alert("must provide rating");
      return;
    }
    Call.addReview({ rating, text, product: props.product, status: "active" })
      .then(d => {
        let {
          data: { data }
        } = d;

        setProducts(data);
      })
      .catch(error => {
        console.log("Error", error.response);
        if (error.response)
          if (error.response.status == (401 || 403)) {
            Router.push("/login");
          }
        //Go to login
      });
  };

  return (
    <div className="review-container" style={{ display: props.display, height: "100%" }}>
      <span
        onClick={props.handleClose}
        style={{
          position: "fixed",
          top: 20,
          right: 10,
          borderRadius: "50%",
          fontSize: "25px",
          fontWeight: "bold",
          padding: "0px 4.5px",
          color: "white",
          backgroundColor: "inherit",
          cursor: "pointer"
        }}
      >
        <IoIosCloseCircleOutline style={{ marginTop: "4px" }} />
      </span>
      <div className="review-create" style={{ position: "absolute", width: "inherit" }}>
        <RatingCreate onCreate={handleCreate} rating={rating} />
        <textarea placeholder="Enter your review..." onChange={handleChange} defaultValue={text} />
        <button onClick={handleSubmit}>submit</button>
      </div>
      <div className="review-read" style={{ marginTop: "150px" }}>
        <ul style={{ padding: "8px", listStyle: "none" }}>
          {reviews.map((e, i) => (
            <li key={i} className="item" style={{ marginBottom: "20px" }}>
              <span
                style={{
                  display: "inline-flex",
                  fontFamily: "'Comic Sans MS', cursive, sans-serif"
                }}
                className="author-name"
              >
                {e.user.name.first} {e.user.name.last}
                <RatingRead style={{ marginLeft: "13px" }} rating={e.rating} />
              </span>
              <p
                className="rating-text"
                style={{
                  fontFamily: "Ubuntu",
                  marginTop: "6px",
                  fontSize: "14px",
                  wordSpacing: "2.5px",
                  letterSpacing: "0.5px",
                  marginLeft: "25px"
                }}
              >
                {e.text}
              </p>
            </li>
          ))}
        </ul>
        <button className="more-button" style={{ display: "none" }}>
          More
        </button>
      </div>
      <style jsx>{`
        .more-button {
          padding: 5px 15px;
          background-color: white;
          border: 1px solid rgb(214, 214, 214);
          border-radius: 3px;
          cursor: pointer;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
          font-size: 16px;
          color: grey;
        }

        .more-button:hover {
          background-color: gray;
          color: white;
          transition: 0.8s;
        }

        .review-container {
          padding: 20px;
          background-color: inherit;
          color: aliceblue;
        }

        .review-create {
          width: auto;
          display: block;
          background: #fff;
          box-shadow: 1px 1px 5px rgb(255, 255, 255);
          padding: 10px 23px;
          border-radius: 10px;
        }

        .review-create textarea {
          padding: 5px 15px;
          border: 1px solid rgb(214, 214, 214);
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
          font-size: 16px;
          color: grey;
          width: 100%;
        }

        .review-create button {
          padding: 5px 15px;
          background-color: white;
          border: 1px solid rgb(214, 214, 214);
          border-radius: 3px;
          cursor: pointer;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
          color: grey;
          float: right;
        }

        .review-create button:hover {
          background-color: gray;
          color: white;
          transition: 0.8s;
        }
      `}</style>
    </div>
  );
}

Review.propTypes = {
  display: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  reviews: PropTypes.array
};

Review.defaultProps = {
  reviews: []
};

export default Review;
