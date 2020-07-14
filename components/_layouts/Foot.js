import "../../styles/foot.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import { useEffect } from "react";

export default function Foot(props) {
  useEffect(() => {}, [props.categories]);
  return (
    <footer>
      <div className="foot_container">
        <div className="foot-box clear">
          <div className="foot-item col-3">
            <div className="mtext">Categories</div>

            <ul>
              {props.categories.map((e, i) => (
                <li className="p-b-6" key={i}>
                  <Link href={`/shop?c=${e._id}&cn=${e.name}`}>
                    <a href="#" className="foot-link">
                      {e.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-item col-3">
            <div className="mtext">About</div>

            <ul>
              <li className="p-b-6">
                <a href="/contact" className="foot-link">
                  9858022037 (Nepal +977)
                </a>
              </li>

              <li className="p-b-6">
                <a href="#" className="foot-link">
                  081540197 (Nepal +977)
                </a>
              </li>

              <li className="p-b-6">
                <a href="#" className="foot-link">
                  shsteeludhyog2013@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="foot-item col-3">
            <div className="mtext">Address</div>

            <ul>
              <li className="p-b-6">
                <span className="foot-link">
                  Any questions? Balbidhya chowk, Kohalpur 10 , Banke, Nepal
                </span>
              </li>
            </ul>
          </div>

          <div className="foot-item col-3" style={{ float: "right" }}>
            <div className="mtext">Get in touch</div>

            <ul>
              <li className="p-b-6">
                <span>
                  <AiFillFacebook className="icon" />
                </span>
                <a
                  href="https://www.facebook.com/SH-Steel-Udhyog-329175414382909"
                  className="foot-link"
                >
                  Facebook
                </a>
              </li>

              <li className="p-b-6">
                <span>
                  <AiFillYoutube className="icon" />
                </span>
                <a
                  href="https://www.youtube.com/channel/UCn48sq4vAop7duLWqruHklQ"
                  className="foot-link"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="rights">All right reserved to SH @{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
