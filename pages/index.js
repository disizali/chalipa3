import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import Slogan from "../components/Slogan";
import Samples from "../components/Samples";
import Representation from "../components/Representation";
import { Container } from "reactstrap";

import axios from "axios";

const Splitter = () => {
  return (
    <Container>
      <hr />
    </Container>
  );
};
export default class Index extends React.Component {
  static async getInitialProps(context) {
    let { data: products } = await axios.get(
      "http://95.216.86.208/api/products"
    );
    return { products: products.splice(0, 4) };
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout className="justify-content-center">
        <Splash />
        <Slogan />
        {/* <Splitter /> */}
        <Samples products={this.props.products} />
        <Splitter />
        <Representation />
      </Layout>
    );
  }
}
