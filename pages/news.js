import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { Container, Col, Row } from "reactstrap";
import axios from "axios";
export default class News extends React.Component {
  static async getInitialProps(context) {
    const host =
      context.req != undefined
        ? `http://${context.req.headers.host}`
        : `${window.location.origin}`;

    const { data: news } = await axios.get(`${host}/api/news`);
    return { news };
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Container className="mt-5 rtl text-right">
          <h1>اخبار : </h1>
          {this.props.news.map((item, index) => {
            const date = new Date(item.createdAt);
            return (
              <Link href={`/news/${item.id}`} key={index}>
                <a>
                  <div className="bg-white shadow rounded p-2 my-3">
                    <Row className="py-2">
                      <Col className="col-lg-1 col-sm-2">
                        <i className="fas fa-bell mt-3"></i>
                      </Col>
                      <Col>
                        <h5 className="mr-5 mt-3 text-primary">{item.title}</h5>
                      </Col>
                      <Col className="col-lg-3 col-sm-4 text-left">
                        <span className="text-muted">
                          {`${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`}
                        </span>
                        <i className="fas fa-clock mt-3 text-muted mr-2"></i>
                      </Col>
                    </Row>
                  </div>
                </a>
              </Link>
            );
          })}
        </Container>
      </Layout>
    );
  }
}
