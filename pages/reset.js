import Layout from "../components/_layouts/Layout";
import ResetPass from "../components/auth/resetpass";

export default function home(props) {
  return (
    <Layout>
      <div style={{ paddingTop: "100px" }}>
        <ResetPass />
      </div>
    </Layout>
  );
}
