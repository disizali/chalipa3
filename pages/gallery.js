import React from "react";
import Layout from "../components/Layout";
import { Row, Col } from "reactstrap";
import Head from "next/head";
export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>چلیپا کابل پویا - گالری</title>
        </Head>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
            return (
              <Col
                sm={3}
                className="text-center d-flex align-items-center justify-content-center p-5"
                key={index}
              >
                <img
                  src={`https://picsum.photos/seed/item${item}/300`}
                  className="w-75 shadow rounded gallery-item"
                />
              </Col>
            );
          })}
        </Row>
      </Layout>
    );
  }
}
