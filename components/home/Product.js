import { useState, useEffect } from "react";
import "../../styles/home.product.module.css";
import { GrFormNextLink } from "react-icons/gr";
import Router from "next/router";
import Call from "./Call";

export default function product(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    product();
  }, []);

  let product = () => {
    Call.getProducts()
      .then(d => {
        let {
          data: { data }
        } = d;
        setProducts(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  let handleRoute = url => {
    Router.push({
      pathname: url,
      query: { category: "door" }
    });
  };

  let handlePRoute = slug => {
    Router.push({
      pathname: "/detail",
      query: { p: slug }
    });
  };

  return (
    <div className="product-container">
      <div className="product_titlebar">
        <div className="filter"></div>
        <h1>PRODUCT OVERVIEW</h1>
      </div>

      <div className="item-container" style={{ width: "100%" }}>
        {products.map((e, i) => (
          <div
            className="product_item"
            key={i}
            onClick={() => {
              handlePRoute(e.slug);
            }}
          >
            <div className="product_img_container">
              <img alt={e.title} src={`${e.profile.url}${e.profile.name}_medium.jpg`} />
            </div>
            <div className="product_detail_container">
              <div className="inline-next">
                <h5 className="title">{e.name}</h5>
              </div>
              <div className="inline_next">
                <h5 className="price">
                  Rs {e.price} {e.price_unit == "normal" ? "" : "per " + e.price_unit}
                </h5>
                <GrFormNextLink className="product_next_btn" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="load-more">
        <button
          onClick={() => {
            handleRoute("/category");
          }}
        >
          View More
        </button>
      </div>
    </div>
  );
}
