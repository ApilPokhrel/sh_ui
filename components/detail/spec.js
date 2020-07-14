import PropTypes from "prop-types";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

function Spec(props) {
  return (
    <div className="sf-container" style={{ display: props.display, height: "100%" }}>
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
      <div className="spec-container ">
        <h1>Specifications</h1>
        <div className="spec sf-item">
          <ul className="options">
            {props.specs.map((e, i) => (
              <li key={i}>
                <span className="key">{e.key}</span> :{" "}
                {e.key && e.key.toLowerCase() === "colors" ? (
                  <span>
                    {e.value.map((c, i) => (
                      <FaCircle
                        className="color"
                        key={i}
                        style={{
                          color: c.value,
                          marginBottom: "-4px",
                          marginLeft: "5px",
                          border: "1px solid white",
                          borderRadius: "50%"
                        }}
                      />
                    ))}
                  </span>
                ) : (
                  <span className="value">{e.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="feature-container">
        <h1>Features</h1>
        <div className="feature sf-item">
          <ul className="features">
            {props.features.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="spec-container ">
        <h1>Units</h1>
        <div className="spec sf-item">
          <ul className="options">
            {props.units.map((e, i) => (
              <li key={i}>
                <span className="key">{e.name}</span> :
                <span className="value">{`${e.value} ${e.standard}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="descr-container ">
        <h1>Description</h1>
        <div className="desc sf-item">{props.desc}</div>
      </div>
      <style jsx>{`
        .sf-container {
          color: aliceblue;
          padding: 5px 20px;
          margin-bottom: 15px;
        }

        .sf-container h1 {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
            Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }

        .sf-container .options .key {
          text-transform: capitalize;
          font-family: "Coda";
          font-weight: 500;
        }

        .sf-item {
          color: rgb(201, 201, 201);
        }
        .sf-container .options .value {
          margin-left: 7px;
          font-family: "Arya";
        }

        .sf-container .feature li {
          font-family: "Coda";
          font-weight: 500;
        }

        .sf-container .descr-container .desc {
          padding-left: 25px;
          padding-right: 10px;
          font-family: "Coda";
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}

Spec.propTypes = {
  display: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  specs: PropTypes.array,
  features: PropTypes.array,
  desc: PropTypes.string
};

Spec.defaultProps = {
  specs: [],
  features: [],
  desc: "",
  units: []
};

export default Spec;
