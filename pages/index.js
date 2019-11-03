import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import Slogan from "../components/Slogan";
import Samples from "../components/Samples";
import Representation from "../components/Representation";
import { Container } from "reactstrap";
import _ from "lodash";
import axios from "axios";
import Head from "next/head";

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
      "http://chalipacable.ir/api/products"
    );
    return { products: _.sampleSize(products, 4) };
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout className="justify-content-center">
        <Head>
          <title>چلیپا کابل پویا - نمایندگی کابل خراسان</title>
        </Head>
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
