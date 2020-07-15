import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RatingRead from "../common/RatingRead";
import { FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import Zoom from "../common/Zoom";
import Back from "../common/Back";
import Review from "./review";
import Spec from "./spec";
import Router from "next/router";
import Call from "./Call";

function Top(props) {
  const [features, setFeatures] = useState([]);
  const [options, setOptions] = useState([]);
  const [prices, setPrices] = useState([]);
  const [url, setUrl] = useState("");

  const [files, setFiles] = useState([]);

  const [product, setProduct] = useState({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setUrl(window.location.href);
    const slug = urlParams.get("p");
    if (!slug) {
      Router.back();
    }

    Call.getProduct(slug)
      .then(d => {
        let { data } = d;
        if (!data) Router.back();
        data = data.document;
        let files = data.files;
        let profile = { url: data.profile.url, name: data.profile.name, type: "image/jpg" };
        files.unshift(profile);
        setFiles(files);

        let features = data.features;
        setFeatures(features);

        setPrices(data.prices);

        let specs = data.specs;
        if (data.colors.length) {
          specs.unshift({ key: "colors", value: data.colors });
        }
        setOptions(specs);
        setProduct(data);
      })
      .catch(e => {
        console.log(e);
        // Router.back();
      });
  }, []);

  const [file, setFile] = useState({ url: "", type: "" });
  const [zoomDisplay, setZoomDisplay] = useState("none");
  const [reviewDisplay, setReviewDisplay] = useState("none");
  const [specDisplay, setSpecDisplay] = useState("none");

  let zoom = null;
  let productDiv = null;
  let spec = null;

  let handleZoom = () => {
    setZoomDisplay("none");
  };

  let handleFileClick = file => {
    setZoomDisplay("block");
    setFile(file);
  };

  let handleReview = () => {
    setReviewDisplay("none");
    productDiv.style.display = "block";
  };

  let handleSpec = () => {
    setSpecDisplay("none");
    productDiv.style.display = "block";
  };

  return (
    <div
      className="product-detail-container"
      style={{
        backgroundImage: `url(${
          product.profile ? product.profile.url + product.profile.name + "_510x340.jpg" : ""
        })`,

        height: "100vh",
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        color: props.color
      }}
    >
      <Back />

      <div className="item left col-6" id="style-1" style={{ overflowY: "scroll", height: "100%" }}>
        <Zoom
          display={zoomDisplay}
          url={file.url}
          type={file.type}
          name={file.name}
          handleClose={handleZoom}
        />
        <div className="files">
          {files.map((e, i) => {
            return e.type.startsWith("image") ? (
              <img
                className="file col-3"
                key={i}
                src={`${e.url}${e.name}_medium.jpg`}
                onClick={() => {
                  handleFileClick(e);
                }}
              />
            ) : (
              <video
                key={i}
                className="file col-3"
                autoPlay="true"
                loop="true"
                muted="true"
                controls="true"
                data-reactid=".0.1.0.0"
                onClick={() => {
                  handleFileClick(e);
                }}
              >
                <source type="video/mp4" data-reactid=".0.1.0.0.0" src={`${e.url}${e.name}.mp4`} />
              </video>
            );
          })}
        </div>
      </div>
      <div
        className="item right col-6"
        id="style-1"
        style={{ overflowY: "scroll", height: "100%" }}
      >
        {product._id ? (
          <Review
            display={reviewDisplay}
            reviews={product.reviews}
            product={product._id}
            handleClose={handleReview}
          />
        ) : (
          ""
        )}

        <Spec
          display={specDisplay}
          handleClose={handleSpec}
          features={features}
          specs={options}
          units={product.units}
          desc={product.desc}
        />

        <div
          className="product"
          ref={div => {
            productDiv = div;
          }}
        >
          <div className="title-container">
            <h1>{product.name}</h1>
            <div className="rating-container">
              <RatingRead rating={product.averageReview || 0} />
              <button
                className="more"
                onClick={() => {
                  setReviewDisplay("block");
                  productDiv.style.display = "none";
                }}
              >
                more <TiArrowRight className="icon" />
              </button>
            </div>
            <h2>
              Rs {product.price} {product.price_unit == "normal" ? "" : "per " + product.price_unit}
            </h2>
          </div>
          <div className="specification-container">
            <div className="inline">
              <h2>Specification</h2>
              <button
                className="more"
                onClick={() => {
                  setSpecDisplay("block");
                  productDiv.style.display = "none";
                }}
              >
                more <TiArrowRight className="icon" />
              </button>
            </div>
            <div className="div">
              <div className="item col-6">
                <ul className="options">
                  {options.slice(0, 5).map((e, i) => (
                    <li key={i}>
                      <span className="key">{e.key}</span> :{" "}
                      {e.key && e.key.toLowerCase() === "colors" ? (
                        <span>
                          <FaCircle
                            className="color"
                            style={{
                              color: e.value[0].value,
                              marginBottom: "-3px",
                              marginLeft: "5px",
                              border: "1px solid black",
                              borderRadius: "50%"
                            }}
                          />
                        </span>
                      ) : (
                        <span className="value">{`${
                          e.value ? e.value.substring(0, 30) : ""
                        }...`}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="item col-6">
                <ul className="features">
                  {features.slice(0, 5).map((e, i) => (
                    <li key={i}>{`${e ? e.substring(0, 33) : ""}...`}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="desc-container">
            <h5>{`${product.desc ? product.desc.substring(0, 100) : ""}...`}</h5>
          </div>
          <div className="social-container">
            <a
              href={`http://www.facebook.com/sharer.php?u=${url}`}
              target="_Blank"
              className="share_icon"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(product.name)}&body=${encodeURIComponent(
                product.desc + "\n\nVisit:  " + url
              )}`}
              target="_Blank"
              className="share_icon"
            >
              <FiMail className="icon" />
            </a>
            <a
              href={`http://www.linkedin.com/shareArticle?mini=true&amp;url=${url}`}
              target="_Blank"
              className="share_icon"
            >
              <AiOutlineLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Top.propTypes = {
  url: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string
};

Top.defaultProps = {
  url: "https://cdn.pixabay.com/photo/2018/04/06/19/35/door-3296644__340.jpg",
  title: "New Door Black",
  price: 12999,
  desc:
    "Tata Steel Leg Chair, size W42 x D57 x H98 cm. Modern Gray Color Made from grade A synthetic leather, soft, comfortable, durable, long service life, easy to clean, elegant, stylish "
};

export default Top;
