import "../../styles/rating.create.module.scss";
import PropTypes from "prop-types";

function RatingCreate(props) {
  let handleClick = (e, num) => {
    for (let n = 1; n <= 5; n++) {
      let rt = document.getElementById(`s_${n}`);
      if (num < n) {
        rt.style.color = "black";
        rt.textContent = "☆";
      } else {
        rt.style.color = "orange";
        rt.textContent = "★";
      }
    }
  };

  return (
    <div className="rating-create">
      <span
        id="s_5"
        onClick={e => {
          handleClick(e, 5);
          props.onCreate(5);
        }}
      >
        ☆
      </span>
      <span
        id="s_4"
        onClick={e => {
          handleClick(e, 4);
          props.onCreate(4);
        }}
      >
        ☆
      </span>
      <span
        id="s_3"
        onClick={e => {
          handleClick(e, 3);
          props.onCreate(3);
        }}
      >
        ☆
      </span>
      <span
        id="s_2"
        onClick={e => {
          handleClick(e, 2);
          props.onCreate(2);
        }}
      >
        ☆
      </span>
      <span
        id="s_1"
        onClick={e => {
          handleClick(e, 1);
          props.onCreate(1);
        }}
      >
        ☆
      </span>
    </div>
  );
}
RatingCreate.propTypes = {
  onCreate: PropTypes.func.isRequired
};
export default RatingCreate;
