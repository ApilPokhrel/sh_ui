import React from "react";
const Layout = React.lazy(() => import("../components/_layouts/Layout"));
const Slidder = React.lazy(() => import("../components/home/SliderCustom"));
const Product = React.lazy(() => import("../components/home/Product"));
const Post = React.lazy(() => import("../components/home/posts"));
const Category = React.lazy(() => import("../components/home/category"));
import { useState, useEffect } from "react";

function home(props) {
  const [spin, setSpin] = useState(false);

  return (
    <Layout spin={spin}>
      <Slidder />
      <Category style={{ marginTop: "50px" }} />
      <Product />
      <Post style={{ marginTop: "30px" }} />
    </Layout>
  );
}

export default home;
