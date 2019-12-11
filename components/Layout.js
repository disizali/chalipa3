import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import "../styles/index.scss";
import Footer from "./Footer";
// import { initGA, logPageView } from '../utils/analytics'
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.gtag = this.gtag.bind(this);
  }
  gtag() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push(arguments);
  }
  componentDidMount() {
    this.gtag("js", new Date());
    this.gtag("config", "UA-154429283-1");
  }

  render() {
    return (
      <main>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-154429283-1"
          ></script>
        </Head>
        <Navbar />
        <div className="children">{this.props.children}</div>
        <Footer articles={this.props.articles} />
      </main>
    );
  }
}
