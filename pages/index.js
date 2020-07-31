import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/_layouts/Layout"));
const Slidder = dynamic(() => import("../components/home/SliderCustom"));
const Product = dynamic(() => import("../components/home/Product"));
const Post = dynamic(() => import("../components/home/posts"));
const Category = dynamic(() => import("../components/home/category"));
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
