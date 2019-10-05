import React from "react";
import Layout from "../component/Layout";
import Splash from "../component/Splash";
import Slogan from "../component/Slogan";
import Categories from "../component/Categories";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout className="justify-content-center">
        <Splash />
        <Slogan />
        <Categories />
      </Layout>
    );
  }
}
