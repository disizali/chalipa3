import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
export default class Articles extends React.Component {
  static async getInitialProps(context) {
    const host =
      context.req != undefined
        ? `http://${context.req.headers.host}`
        : `${window.location.origin}`;

    const { data: articles } = await axios.get(`${host}/api/articles`);
    return { articles };
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Container className="mt-4 justify-content-end rtl text-right">
          <h1>مقالات : </h1>
          {this.props.articles.map((item, index) => {
            const date = new Date(item.createdAt);
            const href = `/articles/${item.id}`;
            return (
              <Link href={href} key={index}>
                <a href={href}>
                  <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <Row>
                      <Col className="col-lg-1 col-sm-2 text-center">
                        <i className="fas fa-newspaper display-4 text-muted "></i>
                      </Col>
                      <Col>
                        <h5 className="text-primary">{item.title}</h5>
                        <p className="text-black-50 mt-2 body-preview">
                          <div
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: `${item.body
                                .split(" ")
                                .slice(0, 4)
                                .join(" ")}...`
                            }}
                          ></div>
                        </p>
                      </Col>
                      <Col className="col-lg-3 col-sm-4 text-left">
                        <span className="text-muted">
                          {`${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`}
                        </span>
                        <i className="fas fa-clock align-center text-muted mr-2 mt-5 pt-5"></i>
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
