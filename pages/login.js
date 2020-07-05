import Layout from "../components/_layouts/Layout";
import Login from "../components/auth/login";

export default function login(props) {
  return (
    <Layout nav="contact" top={false}>
      <div style={{}}>
        <Login />
      </div>
    </Layout>
  );
}
