import React from "react";
import Layout from "../../components/Layout";
import Router from "next/router";

export default class Category extends React.Component {
  static async getInitialProps(context) {
    const { res } = context;

    const {
      query: { id }
    } = context;
    const categories = require("../../static/data/categories.json");
    if (id > categories.length) {
      return { error: true };
    }
    const subCategories = categories.filter(item => {
      return item.parentCategory == context.query.id;
    });
    if (subCategories == undefined || !subCategories.length) {
      const products = require("../../static/data/products.json");
      const product = products.find(item => item.category == id);
      if (res) {
        res.writeHead(302, {
          Location: `/product/${product.id}`
        });
        res.end();
      } else {
        Router.push(`/product/${product.id}`);
      }
      return {};
    }
    return { categories: subCategories };
  }
  constructor(props) {
    super(props);
  }
  render() {
    const { categories, redirect, error } = this.props;

    return (
      <Layout>
        {error ? "error" : ""}
        {redirect ? "redirected" : ""}
        {!redirect && !error
          ? categories.map(item => {
              return <li>{item.title}</li>;
            })
          : ""}
      </Layout>
    );
  }
}
