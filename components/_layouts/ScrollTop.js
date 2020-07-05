import { IoIosArrowUp } from "react-icons/io";

export default function ScrollTop(props) {
  let handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button onClick={handleClick} id="scroll_top_btn" title="Go to top">
      <IoIosArrowUp />
    </button>
  );
}
