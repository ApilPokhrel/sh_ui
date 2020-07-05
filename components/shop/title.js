import { BsFilter } from "react-icons/bs";
import PropTypes from "prop-types";

function title(props) {
  return (
    <div>
      <div className="product_titlebar" style={props.style}>
        <div className="filter">
          <button>
            <BsFilter
              className="icon"
              style={{ marginRight: "4px", marginBottom: "-3px", marginLeft: "-3px" }}
            />
            Filter
          </button>
        </div>
        <h1>{props.title}</h1>
      </div>
      <style jsx>{`
        .product_titlebar .filter {
          float: right;
        }

        .product_titlebar .filter button {
          padding: 5px 15px;
          background-color: white;
          border: 1px solid rgb(214, 214, 214);
          border-radius: 3px;
          cursor: pointer;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
          font-size: 16px;
          color: grey;
        }

        .product_titlebar .filter button:hover {
          background-color: gray;
          color: white;
          transition: 0.8s;
        }

        .product_titlebar .filter .icon {
          margin-bottom: -3px !important;
          margin-left: -3px !important;
          margin-right: 4px !important;
        }

        .product_titlebar h1 {
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
        }
      `}</style>
    </div>
  );
}

title.propTypes = {
  title: PropTypes.string.isRequired
};

export default title;
