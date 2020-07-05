import { useEffect, useState, Children, isValidElement, cloneElement } from "react";
import Foot from "./Foot";
import Header from "./Header";
import Top from "./Top";
import ScrollTop from "./ScrollTop";
import "../../styles/index.module.css";
import "../../styles/index.module.scss";
import PropTypes from "prop-types";
import Spin from "../common/Spin";
import Call from "../home/Call";

function Layout(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getInitials();
  }, []);

  let getInitials = async () => {
    const {
      data: { data }
    } = await Call.getCategories();
    setCategories(data);
  };
  return (
    <div className="page-container" style={{ height: "100%" }}>
      <Spin spin={props.spin}>
        <Header />
        {props.top ? <Top active={props.nav} /> : <></>}
        <main className="content-wrap" style={props.style}>
          {Children.map(props.children, child => {
            if (isValidElement(child)) {
              return cloneElement(child, { categories });
            }
            return child;
          })}
        </main>
        <Foot categories={categories} />
        <ScrollTop />
      </Spin>
    </div>
  );
}

Layout.propTypes = {
  top: PropTypes.bool,
  spin: PropTypes.bool,
  categories: PropTypes.array
};

Layout.defaultProps = {
  top: true,
  spin: false
};

export default Layout;
