import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

function RatingRead(props) {
  return (
    <div style={props.style} className={props.className}>
      <style>{`
            .checked {
            color: orange;
            }`}</style>
      <FaStar className={props.rating >= 1 ? `checked` : ""} />
      <FaStar className={props.rating >= 2 ? `checked` : ""} />
      <FaStar className={props.rating >= 3 ? `checked` : ""} />
      <FaStar className={props.rating >= 4 ? `checked` : ""} />
      <FaStar className={props.rating >= 5 ? `checked` : ""} />
    </div>
  );
}

RatingRead.propTypes = {
  rating: PropTypes.number.isRequired
};

export default RatingRead;
