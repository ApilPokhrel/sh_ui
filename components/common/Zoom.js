import PropTypes from "prop-types";
import { IoIosCloseCircleOutline } from "react-icons/io";
//diplay change
function Zoom(props) {
  return (
    <div
      style={{
        zIndex: 10000,
        padding: "50px",
        display: props.display,
        position: "fixed",
        backgroundColor: "#777",
        marginLeft: "auto",
        marginRight: "auto"
      }}
      id="style-1"
    >
      <span
        onClick={props.handleClose}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          fontSize: "30px",
          fontWeight: "bold",
          color: "black",
          cursor: "pointer"
        }}
      >
        <IoIosCloseCircleOutline />
      </span>
      {props.type.startsWith("image") ? (
        <img
          style={{ objectFit: "contain", height: "100vh" }}
          src={`${props.url}${props.name}_510x340.jpg`}
        />
      ) : (
        <video src={`${props.url}${props.name}`}></video>
      )}
    </div>
  );
}

Zoom.propTypes = {
  type: PropTypes.string,
  url: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired
};

Zoom.defaulProps = {
  url: "",
  type: "image"
};

export default Zoom;
