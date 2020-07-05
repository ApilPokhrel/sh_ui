import Layout from "../components/_layouts/Layout";
import Category from "../components/common/category";

function category(props) {
  return (
    <Layout nav="wholesale" style={{ backgroundColor: "#2196f3" }}>
      <Category />
    </Layout>
  );
}

export default category;
