import Layout from "../components/_layouts/Layout";
import "../styles/product.detail.module.css";
import Top from "../components/detail/top";

export default function home(props) {
  return (
    <Layout nav="contact" top={false}>
      <div style={{}}>
        <Top />
      </div>
    </Layout>
  );
}
