import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Container, Col, Row } from "reactstrap";
import * as api from "../../src/api";
import Head from "next/head";
export default class News extends React.Component {
  static async getInitialProps(context) {
    const news = await api.getNews();
    return { news };
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
          <title>چلیپا کابل پویا - اخبار</title>
        </Head>
        <Container className="news-container my-5 rtl text-right">
          <Row>
            {this.props.news.map((item, index) => {
              const date = new Date(item.createdAt);
              return (
                <Col sm={3} className="bg-sm-white news-item mb-2" key={index}>
                  <Link href={`/news/${item.title}`} key={index}>
                    <a>
                      <img
                        src={`/static/uploads/images/${item.image}`}
                        className="rounded shadow news-image"
                        width="100%"
                      />
                      <h3 className="news-title my-3 px-3">{item.title}</h3>
                      <p className="news-date">
                        <span>{this.getDiffrents(item.createdAt)}</span>
                        <span className="mr-2"> روز پیش</span>
                      </p>
                      <div
                        className="news-preview"
                        dangerouslySetInnerHTML={{
                          __html:
                            item.body.substring(
                              item.body.indexOf("<p>"),
                              item.body.indexOf("</p>")
                            ) + " ..."
                        }}
                      ></div>
                      <div className="d-flex justify-content-end">
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
