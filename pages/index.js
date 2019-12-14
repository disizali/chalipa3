import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import Slogan from "../components/Slogan";
import Samples from "../components/Samples";
import Representation from "../components/Representation";
import { Container } from "reactstrap";
import _ from "lodash";
import Head from "next/head";
import * as api from "../src/api";

const Splitter = () => {
  return (
    <Container>
      <hr />
    </Container>
  );
};
export default class Index extends React.Component {
  static async getInitialProps(context) {
    let products = await api.getProducts();
    const articles = _.sampleSize(await api.getArticles(), 5);
    const categories = await api.getCategories();
    return { products: _.sampleSize(products, 4), articles, categories };
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout
        className="justify-content-center"
        articles={this.props.articles}
        categories={this.props.categories}
      >
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
