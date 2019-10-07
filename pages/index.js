import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import Slogan from "../components/Slogan";
import Samples from "../components/Samples";
import Customers from "../components/Customers";
import { Container } from "reactstrap";

const Splitter = () => {
  return (
    <Container>
      <hr />
    </Container>
  );
};
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout className="justify-content-center">
        <Splash />
        <Slogan />
        {/* <Splitter /> */}
        <Samples />
        <Splitter />
        <Customers />
      </Layout>
    );
  }
}
