import { useState, useEffect } from "react";
import Router from "next/router";

function category(props) {
  let handleRoute = (id, name) => {
    Router.push({
      pathname: "/shop",
      query: { c: id, cn: name }
    });
  };

  return (
    <div style={props.style} className={props.className}>
      <div className="h-c">
        {props.categories.splice(0, 3).map((e, i) => (
          <div
            className="h-c-item"
            key={i}
            onClick={() => {
              handleRoute(e._id, e.name);
            }}
          >
            <img src={`${e.profile.url}${e.profile.name}_510x340.jpg`} alt="IMG-BANNER" />

            <span href="" className="detail" style={{ cursor: "pointer" }}>
              <div className="detail-first">
                <span className="name">
                  {/* <marquee behavior="scroll" direction="right"> */}
                  {e.name}
                  {/* </marquee> */}
                </span>
              </div>

              <div className="detail-second">
                <div className="btn">Shop Now</div>
              </div>
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .h-c {
          display: grid;
          grid-column-gap: 70px;
          justify-content: space-evenly;
          grid-template-columns: repeat(3, 1fr);
          padding: 0px 120px;
        }
        .h-c-item {
          border: 1px solid #ddd;
          position: relative;
          display: block;
        }

        .h-c-item img {
          width: 100%;
          z-index: 0;
          vertical-align: middle;
          border-style: none;
        }

        .h-c-item .detail {
          position: absolute;
          left: 0px;
          top: 0px;
          transition: all 0.3s;
          width: 100%;
          height: 100%;
          padding: 40px;
          text-decoration: none;
          color: #fff;
        }

        .h-c-item .detail:hover {
          background-color: #2196f3;
          opacity: 0.7;
        }

        .h-c-item .detail:hover .detail-second {
          transform: scaleX(1);
        }

        .h-c-item .detail .name {
          font-size: 35px;
          font-weight: 700;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
          line-height: 1.1;
          padding: 5px 5px;
        }

        .h-c-item .detail .btn {
          font-size: 15px;
          line-height: 1.466667;
          text-transform: uppercase;
          font-family: "Ubuntu";
          color: #fff;
        }

        .detail-second {
          border-bottom: 2px solid #fff;
          margin-top: 40px;
          overflow: hidden;
          position: absolute;
          transform: scaleX(0);
          transition: all 0.5s;
        }

        @media only screen and (max-width: 600px) {
          .h-c {
            grid-template-columns: repeat(1, 1fr);
            padding: 0px 10px;
            grid-row-gap: 20px;
          }
        }

        @media (min-width: 600px) {
          .h-c {
            grid-template-columns: repeat(1, 1fr);
            padding: 0px 10px;
            grid-row-gap: 20px;
          }
        }

        @media (min-width: 800px) {
          .h-c {
            grid-template-columns: repeat(2, 1fr);
            padding: 0px 10px;
            grid-row-gap: 20px;
            padding: 4px 10px;
          }
        }

        @media (min-width: 1000px) {
          .h-c {
            grid-template-columns: repeat(3, 1fr);
            padding: 0px 10px;
            grid-row-gap: 20px;
            padding: 10px 10px;
          }
        }

        @media (min-width: 1068px) {
          .h-c {
            grid-template-columns: repeat(3, 1fr);
            padding: 0px 10px;
            grid-row-gap: 20px;
            padding: 10px 50px;
          }
        }

        @media (min-width: 1200px) {
          .h-c {
            grid-template-columns: repeat(3, 1fr);
            padding: 0px 10px;
            grid-row-gap: 20px;
            padding: 10px 120px;
          }
        }
      `}</style>
    </div>
  );
}

export default category;
