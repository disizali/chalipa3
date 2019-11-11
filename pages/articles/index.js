import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import * as api from "../../src/api";
import Head from "next/head";

export default class Articles extends React.Component {
  static async getInitialProps(context) {
    const articles = await api.getArticles();
    return { articles };
  }
  constructor(props) {
    super(props);
  }
  getDiffrents(date) {
    const date1 = new Date();
    const date2 = new Date(date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>چلیپا کابل پویا - مقالات</title>
        </Head>
        <Container className="news-container my-5 rtl text-right">
          <Row>
            {this.props.articles.map((item, index) => {
              console.log(
                item.body
                  .substring(
                    item.body.indexOf("<p>"),
                    item.body.indexOf("</p>")
                  )
                  .replace(/h\d/g, "span")
              );
              const previewText =
                item.body
                  .substring(
                    item.body.indexOf("<p>"),
                    item.body.indexOf("</p>")
                  )
                  .replace(/h\d/g, "span")
                  .substring(0, 200) + " ...";

              return (
                <Col sm={3} className="news-item" key={index}>
                  <Link href={`/articles/${item.title}`} key={index}>
                    <a>
                      <img
                        src={`/static/uploads/images/${item.image}`}
                        className="rounded shadow"
                        width="100%"
                      />
                      <h4 className="news-title my-3 px-3">{item.title}</h4>
                      <p className="news-date">
                        <span>{this.getDiffrents(item.createdAt)}</span>
                        <span className="mr-2"> روز پیش</span>
                      </p>
                      <div
                        className="news-preview pb-4"
                        dangerouslySetInnerHTML={{
                          __html: previewText
                        }}
                      ></div>
                      <div
                        className="d-flex justify-content-end position-absolute"
                        style={{ bottom: "5px", left: "5px" }}
                      >
                        <span className="mx-2 text-primary">بیشتر بخوانید</span>
                        <i className="fas fa-arrow-left mx-2 text-primary"></i>
                      </div>
                    </a>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Layout>
    );
  }
}
