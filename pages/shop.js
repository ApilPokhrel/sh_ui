import React, { useState } from "react";
import Layout from "../components/_layouts/Layout";
const Filter = React.lazy(() => import("../components/shop/filter"));
import Back from "../components/common/Back";
const Product = React.lazy(() => import("../components/shop/product"));
import Title from "../components/shop/title";

function shop(props) {
  const [filters, setFilters] = useState({});

  let handleFilter = payload => {
    setFilters(payload);
  };
  return (
    <Layout top={false}>
      <div className="product-main">
        <Back />
        <Title title={props.title} style={{ marginLeft: "50px" }} />
        <Filter filter={handleFilter} />
        <Product filters={filters} />
        <style jsx>{`
          .product-main {
            padding: 10px 50px;
          }

          @media only screen and (max-width: 600px) {
            .product-main {
              padding: 5px;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}

shop.getInitialProps = async ({ query }) => {
  return { title: query.cn };
};

export default shop;
