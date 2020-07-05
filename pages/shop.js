import { useState } from "react";
import Layout from "../components/_layouts/Layout";
import Filter from "../components/shop/filter";
import Back from "../components/common/Back";
import Product from "../components/shop/product";
import Title from "../components/shop/title";

export default function home(props) {
  const [filters, setFilters] = useState({});

  let handleFilter = payload => {
    setFilters(payload);
  };
  return (
    <Layout top={false}>
      <div className="product-main">
        <Back />
        <Title title="Steel Doors" style={{ marginLeft: "50px" }} />
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
