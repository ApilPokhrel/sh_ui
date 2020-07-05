import Layout from "../components/_layouts/Layout";
import Register from "../components/auth/register";

export default function login(props) {
  return (
    <Layout nav="contact" top={false}>
      <div style={{}}>
        <Register />
      </div>
    </Layout>
  );
}
