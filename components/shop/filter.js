import { FaCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

let allowedTags = [];
function filter(props) {
  const [sort, setSort] = useState("default");
  const [price, setPrice] = useState("all");
  const [color, setColor] = useState("all");
  const [tags, setTags] = useState([]);

  let handleSortClick = (e, val) => {
    setSort(val);
    props.filter({ sort: val, price, color, tags });
  };

  let handlePriceClick = (e, val) => {
    setPrice(val);
    props.filter({ sort, price: val, color, tags });
  };

  let handleColorClick = (e, val) => {
    setColor(val);
    props.filter({ sort, price, color: val, tags });
  };

  let handleTagsClick = (e, val) => {
    allowedTags = [];
    allowedTags = [...tags];
    let idx = allowedTags.indexOf(val);
    if (idx > -1) {
      allowedTags.splice(idx, 1);
    } else {
      allowedTags.push(val);
    }
    setTags(allowedTags);
    props.filter({ sort, price, color, tags: allowedTags });
  };

  return (
    <div className="filter-box clear" style={{ display: "none" }}>
      <div className="filter-item col-3">
        <div className="mtext">Sort By</div>

        <ul>
          <li
            className="p-b-6"
            onClick={e => {
              handleSortClick(e, "default");
            }}
          >
            <span className={`filter-link ${sort === "default" ? "filter-link-active" : ""}`}>
              Default
            </span>
          </li>

          <li className="p-b-6">
            <span
              className={`filter-link ${sort === "popular" ? "filter-link-active" : ""}`}
              onClick={e => {
                handleSortClick(e, "popular");
              }}
            >
              Popularity
            </span>
          </li>

          <li
            className="p-b-6"
            onClick={e => {
              handleSortClick(e, "average_rating");
            }}
          >
            <span
              className={`filter-link ${sort === "average_rating" ? "filter-link-active" : ""}`}
            >
              Average rating
            </span>
          </li>

          <li
            className="p-b-6"
            onClick={e => {
              handleSortClick(e, "old");
            }}
          >
            <span className={`filter-link ${sort === "old" ? "filter-link-active" : ""}`}>Old</span>
          </li>

          <li
            className="p-b-6"
            onClick={e => {
              handleSortClick(e, "low_to_high");
            }}
          >
            <span className={`filter-link ${sort === "low_to_high" ? "filter-link-active" : ""}`}>
              Price: Low to High
            </span>
          </li>

          <li
            className="p-b-6"
            onClick={e => {
              handleSortClick(e, "high_to_low");
            }}
          >
            <span className={`filter-link ${sort === "high_to_low" ? "filter-link-active" : ""}`}>
              Price: High to Low
            </span>
          </li>
        </ul>
      </div>

      <div className="filter-item col-3">
        <div className="mtext">Price</div>

        <ul>
          <li
            className="p-b-6"
            onClick={e => {
              handlePriceClick(e, "all");
            }}
          >
            <span className={`filter-link ${price === "all" ? "filter-link-active" : ""}`}>
              All
            </span>
          </li>

          <li
            className="p-b-6"
            onClick={e => {
              handlePriceClick(e, "0-12000");
            }}
          >
            <span className={`filter-link ${price === "0-12000" ? "filter-link-active" : ""}`}>
              0.00 - 12000
            </span>
          </li>

          <li
            className="p-b-6"
            onClick={e => {
              handlePriceClick(e, "12000-18000");
            }}
          >
            <span className={`filter-link ${price === "12000-18000" ? "filter-link-active" : ""}`}>
              12000 - 18000
            </span>
          </li>

          <li
            className="p-b-6"
            onClick={e => {
              handlePriceClick(e, "18000-23000");
            }}
          >
            <span className={`filter-link ${price === "18000-23000" ? "filter-link-active" : ""}`}>
              18000 - 23000
            </span>
          </li>

          <li
            className="p-b-6"
            onClick={e => {
              handlePriceClick(e, "23000+");
            }}
          >
            <span className={`filter-link ${price === "23000+" ? "filter-link-active" : ""}`}>
              23000+
            </span>
          </li>
        </ul>
      </div>

      <div className="filter-item col-3">
        <div className="mtext">Color</div>

        <ul>
          <li
            className="p-b-6"
            onClick={e => {
              handleColorClick(e, "all");
            }}
          >
            <span className={`filter-link ${color === "all" ? "filter-link-active" : ""}`}>
              All
            </span>
          </li>
          <li
            className="p-b-6"
            onClick={e => {
              handleColorClick(e, "black");
            }}
          >
            <span className="color-span" style={{ color: "black" }}>
              <FaCircle className="icon" style={{ marginBottom: "-3px", marginRight: "4px" }} />
            </span>

            <span className={`filter-link ${color === "black" ? "filter-link-active" : ""}`}>
              Black
            </span>
          </li>

          <li
            className="p-b-6"
            onClick={e => {
              handleColorClick(e, "red");
            }}
          >
            <span className="color-span" style={{ color: "red" }}>
              <FaCircle className="icon" style={{ marginBottom: "-3px", marginRight: "4px" }} />
            </span>

            <span className={`filter-link ${color === "red" ? "filter-link-active" : ""}`}>
              Red
            </span>
          </li>

          <li
            className="p-b-6"
            onClick={e => {
              handleColorClick(e, "grey");
            }}
          >
            <span className="color-span" style={{ color: "grey" }}>
              <FaCircle className="icon" style={{ marginBottom: "-3px", marginRight: "4px" }} />
            </span>

            <span className={`filter-link ${color === "grey" ? "filter-link-active" : ""}`}>
              Grey
            </span>
          </li>
        </ul>
      </div>

      <div className="filter-item col-3">
        <div className="mtext">Tags</div>

        <div className="tags">
          <span
            style={{ border: tags.indexOf("door") > -1 ? "1px solid rgb(173, 48, 48)" : "" }}
            onClick={e => {
              handleTagsClick(e, "door");
            }}
          >
            Door
          </span>

          <span
            style={{ border: tags.indexOf("chaukas") > -1 ? "1px solid rgb(173, 48, 48)" : "" }}
            onClick={e => {
              handleTagsClick(e, "chaukas");
            }}
          >
            Chaukas
          </span>

          <span
            style={{ border: tags.indexOf("manuallock") > -1 ? "1px solid rgb(173, 48, 48)" : "" }}
            onClick={e => {
              handleTagsClick(e, "manuallock");
            }}
          >
            Manuallock
          </span>

          <span
            style={{ border: tags.indexOf("pinlock") > -1 ? "1px solid rgb(173, 48, 48)" : "" }}
            onClick={e => {
              handleTagsClick(e, "pinlock");
            }}
          >
            Pinlock
          </span>

          <span
            style={{ border: tags.indexOf("digitallock") > -1 ? "1px solid rgb(173, 48, 48)" : "" }}
            onClick={e => {
              handleTagsClick(e, "digitallock");
            }}
          >
            Digitallock
          </span>
        </div>
      </div>
      <style jsx>{`
        .filter-box {
          width: 100%;
          background-color: rgb(247, 247, 247);
          padding: 10px;
          border-radius: 3px;
          position: relative;
        }

        .filter-box .filter-item .mtext {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          margin-left: 32px;
          font-weight: 600;
          color: dimgray;
        }

        .filter-box .filter-item {
          float: left;
        }

        .filter-box .filter-item .icon {
          margin-bottom: -3px !important;
          margin-right: 4px !important;
        }

        .filter-box .filter-item .tags {
          flex-wrap: wrap;
          display: flex;
          padding: 4px;
        }

        .p-b-6 {
          margin: 5px 0px;
        }

        .filter-box .filter-item .tags span {
          border: 1px solid #ccc;
          border-radius: 15px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-size: 13px;
          line-height: 1.923;
          color: #888;
          justify-content: center;
          -ms-align-items: center;
          align-items: center;
          margin: 5px;
          padding: 2px 15px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.4s;
          text-transform: capitalize;
        }

        .filter-box .filter-item .filter-link {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
            Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          font-size: 14px;
          line-height: 1.2;
          font-weight: 500;
          padding: 10px 0px;
          color: #aaa;
          border-bottom: 1px solid transparent;
          transition: all 0.4s;
          cursor: pointer;
          touch-action: manipulation;
          text-decoration: none;
        }

        .filter-box .filter-item .filter-link:hover {
          color: #333;
        }

        .filter-box .filter-item .filter-link-active {
          color: #333;
        }

        .filter-box .filter-item .tags span:hover {
          border: 1px solid rgb(173, 48, 48);
          color: #333;
        }

        .product_titlebar .filter button:hover {
          background-color: gray;
          color: white;
          transition: 0.8s;
        }

        .product_titlebar .filter .icon {
          margin-bottom: -3px;
          margin-left: -3px;
          margin-right: 4px;
        }

        @media only screen and (max-width: 668px) {
          .filter-item {
            width: 50%;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default filter;
