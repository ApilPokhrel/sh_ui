import Router from "next/router";
import { MdArrowBack } from "react-icons/md";

export default function Back(props) {
  return (
    <span
      onClick={() => Router.back()}
      className="back-btn"
      style={{
        position: "fixed",
        top: 20,
        left: 20,
        color: "#fff",
        backgroundColor: "#333",
        borderRadius: "50%",
        padding: "7px 9px",
        cursor: "pointer",
        boxShadow: "0px 0px 1px #111",
        zIndex: 10000
      }}
    >
      <MdArrowBack />
    </span>
  );
}
