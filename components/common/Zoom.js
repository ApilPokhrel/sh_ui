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
        position: "absolute",
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
          style={{ objectFit: "contain", width: "100%" }}
          src={`${props.url}${props.name}_medium.jpg`}
        />
      ) : (
        <video
          className="file col-3"
          autoPlay={true}
          loop={true}
          muted={true}
          controls={true}
          style={{ height: "100%", width: "100%" }}
          data-reactid=".0.1.0.0"
        >
          <source
            type="video/mp4"
            data-reactid=".0.1.0.0.0"
            src={`${props.url}${props.name}.mp4`}
          />
        </video>
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
