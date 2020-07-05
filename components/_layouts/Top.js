import "../../styles/topnav.module.scss";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Top(props) {
  const [collectRefs, setCollectionRefs] = useState([]);

  let handleClick = event => {
    for (var c of collectRefs) {
      if (c && c.e) c.e.classList.remove("is_active");
    }

    collectRefs.pop(event.target);
    event.target.classList.add("is_active");
  };

  return (
    <nav className="nav">
      <Link href="/">
        <a
          href="#"
          className={`nav_item ${props.active == "home" ? "is_active" : ""}`}
          ref={home => {
            collectRefs.push({ is: "home", e: home });
          }}
          onClick={handleClick}
        >
          Home
        </a>
      </Link>
      <Link href="/category">
        <a
          href="#"
          className={`nav_item ${props.active == "wholesale" ? "is_active" : ""}`}
          ref={about => {
            collectRefs.push({ e: about, is: "about" });
          }}
          onClick={handleClick}
        >
          Wholesale
        </a>
      </Link>

      <Link href="/contact">
        <a
          href="#"
          className={`nav_item ${props.active == "contact" ? "is_active" : ""}`}
          ref={contact => {
            collectRefs.push({ e: contact, is: "contact" });
          }}
          onClick={handleClick}
        >
          Contact
        </a>
      </Link>
      <span className="nav_indicator"></span>
    </nav>
  );
}

Top.propTypes = {
  active: PropTypes.string
  // onClick: PropTypes.func
};

Top.defaultProps = {
  active: "home"
  // onClick: function(){ alert("Hello"); }
};

export default Top;
