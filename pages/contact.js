import Layout from "../components/_layouts/Layout";
import Logo from "../components/contact/logo";
import Fill from "../components/contact/fill";

export default function home(props) {
  return (
    <Layout nav="contact">
      <div style={{}}>
        <Logo />
        <Fill />
      </div>
    </Layout>
  );
}
