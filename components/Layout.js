import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import "../styles/index.scss";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        
        <Navbar />
        <div className="children">{this.props.children}</div>
        <Footer />
      </main>
    );
  }
}
