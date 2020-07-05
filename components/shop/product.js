import { useState, useEffect } from "react";
import RatingRead from "../common/RatingRead";
import Call from "./Call";
import Router from "next/router";

let arrayForHoldingProducts = [];

function product(props) {
  const [products, setProducts] = useState([]);

  const [limit, setLimit] = useState(3);
  const [start, setStart] = useState(0);
  const [C, setC] = useState("");

  let handlePRoute = slug => {
    Router.push({
      pathname: "/detail",
      query: { p: slug }
    });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const c = urlParams.get("c");
    if (!c) {
      // Router.back();
    }
    setC(c);
    Call.list(0, limit, props.filters, c)
      .then(d => {
        let {
          data: { data }
        } = d;
        arrayForHoldingProducts = [];
        arrayForHoldingProducts = [...arrayForHoldingProducts, ...data];
        setProducts(arrayForHoldingProducts);
        document.getElementById("load_more").style.display = "block";
      })
      .catch(e => {
        console.log(e);
      });
  }, [props.filters]);

  let handleLoadMore = event => {
    let st = start + limit;
    Call.list(st, limit, props.filters, C)
      .then(d => {
        let { data } = d;
        setStart(data.start);
        arrayForHoldingProducts = [...arrayForHoldingProducts, ...data.data];
        setProducts(arrayForHoldingProducts);
        if (data.start + limit >= data.total) {
          setStart(0);
          document.getElementById("load_more").style.display = "none";
        }
      })
      .catch(e => {
        alert(e);
      });
  };

  return (
    <div>
      <div className="product-container">
        <div className="item-container" style={{ width: "100%" }}>
          {products.map((e, i) => (
            <div
              className="product_item"
              key={i}
              onClick={() => {
                handlePRoute(e.document.slug);
              }}
            >
              <div className="product_img_container">
                <img
                  alt={e.document.name}
                  src={`${e.document.profile.url}${e.document.profile.name}_510x340.jpg`}
                />
              </div>
              <div className="product_detail_container">
                <div className="inline-next">
                  <h5 className="title">{e.document.name}</h5>
                </div>
                <RatingRead rating={e.reviewCount} style={{ marginBottom: "10px" }} />
                <div className="inline_next">
                  <h5 className="price">Rs {e.document.price}</h5>
                  <button className="add-btn">{`Add ( ${e.document.min} )`}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="load-more">
          <button
            id="load_more"
            onClick={event => {
              handleLoadMore(event);
            }}
          >
            Load More
          </button>
        </div>
      </div>
      <style jsx>{`
        .product-container {
          height: auto;
          padding: 1px 10px;
          margin-top: 0px;
          margin-bottom: 0px;
        }

        .item-container {
          display: grid;
          grid-gap: 1rem;
          margin: 0 auto;
        }

        .product-container .load-more {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          bottom: 0;
          padding: 40px;
        }

        .product-container .load-more {
          float: left;
          width: 100%;
        }

        .product-container .load-more button {
          padding: 15px 30px;
          background-color: #333;
          color: aliceblue;
          border-radius: 50px;
          border: none;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          text-align: center;
          transition: 0.5s;
        }

        .product-container .load-more button:hover {
          color: #333;
          background-color: rgb(226, 224, 224);
        }

        .product-container h3 {
          text-align: center;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
          color: #333;
        }

        .product_item {
          border-radius: 10px;
          border-collapse: separate;
          margin: 10px 5px;
          max-height: 400px;
        }

        .product_item:hover {
          box-shadow: 0 20px 35px rgba(99, 100, 105, 0.8);
        }

        .product_img_container {
          overflow: hidden;
        }

        .product_img_container:hover img {
          transform: scale(1.1);
        }

        .product_img_container img {
          max-height: 250px;
          width: 100%;
          transition: 0.2s all ease-in-out;
        }

        .product_detail_container {
          padding: 0px 15px;
        }

        .product_detail_container .inline_next {
          width: 100%;
        }

        .product_detail_container .inline_next .add-btn {
          border-radius: 100px;
          border: none;
          float: right;
          background-color: grey;
          padding: 5px 12px;
          cursor: pointer;
          color: aliceblue;
          font-family: "Coda";
          font-weight: 510;
          transition: 0.2s;
        }

        .product_detail_container .inline_next .add-btn:hover {
          color: #777;
          background-color: aliceblue;
          padding: 6px 13px;
        }

        .product_detail_container .title {
          color: #333;
          font-size: 15px;
        }

        .product_detail_container .price {
          color: slategray;
          font-size: 15px;
          max-width: 60%;
          margin-top: -0px;
          float: left;
        }

        .product_detail_container h5 {
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
            sans-serif;
        }

        @media (min-width: 600px) {
          .item-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 900px) {
          .item-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media only screen and (max-width: 600px) {
          [class*="product-container"] {
            padding: 4px 5px;
          }

          .item-container {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

export default product;
