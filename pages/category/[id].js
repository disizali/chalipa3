import React from "react";
import Layout from "../../components/Layout";
import Router from "next/router";
import axios from "axios";

export default class Category extends React.Component {
  static async getInitialProps(context) {
    const { res } = context;

    const {
      query: { id }
    } = context;
    const 

      const {data :category } = await axios.get(`http://localhost:3000/api/categories/${id}`);
      if (category.subCategories){
        return { category: categories };
      }else {
        const {data : products} = await axios.get("http://localhost:3000/api/products");
        const product = products.find(item => item.category == id);
        if (res) {
          res.writeHead(302, {
            Location: `/products/${product.id}`
          });
          res.end();
        } else {
          Router.push(`/products/${product.id}`);
        }
        return {};
      }      
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
