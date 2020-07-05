import Layout from "../components/_layouts/Layout";
import Verify from "../components/auth/verify";

export default function login(props) {
  return (
    <Layout nav="contact" top={false}>
      <div style={{}}>
        <Verify />
      </div>
    </Layout>
  );
}
