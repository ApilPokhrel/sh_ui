import Layout from "../components/_layouts/Layout";
import Slidder from "../components/home/SliderCustom";
import Product from "../components/home/Product";
import Post from "../components/home/posts";
import Category from "../components/home/category";
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
