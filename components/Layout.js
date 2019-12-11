import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import "../styles/index.scss";
import Footer from "./Footer";
// import { initGA, logPageView } from '../utils/analytics'
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount () {
  //   if (!window.GA_INITIALIZED) {
  //     initGA()
  //     window.GA_INITIALIZED = true
  //   }
  //   logPageView()
  // }
  
  render() {
    return (
      <main>
        <Navbar />
        <div className="children">{this.props.children}</div>
        <Footer articles={this.props.articles} />
      </main>
    );
  }
}
