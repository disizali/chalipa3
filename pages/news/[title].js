import { Component } from "react";
import Layout from "../../components/Layout";
import { Row, Col } from "reactstrap";
import Link from "next/link";
import Head from "next/head";
import * as api from "../../src/api";
import _ from "lodash";
export default class News extends Component {
  static async getInitialProps(context) {
    let title = context.query.title;
    const allNews = await api.getNews();
    const articles = _.sampleSize(await api.getArticles(), 5);
    const news = allNews.find(item => item.title == title);
    return { news, allNews, articles };
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
    const { news, allNews } = this.props;
    return (
      <Layout articles={this.props.articles}>
        <Head>
          <title>چلیپا کابل پویا - {news.title}</title>
        </Head>
        <div className="m-4 p-5 rtl text-right">
          <Row>
            <Col sm={12} md={9}>
              <Row>
                <Col sm={12} className="p-0">
                  <h1 className="news-title pr-3 my-2"> {news.title}</h1>
                  <p className="news-date my-2">
                    <span className="mx-2">نوشته شده در </span>
                    <span>{this.getDiffrents(news.createdAt)}</span>
                    <span className="mr-2"> روز پیش</span>
                  </p>
                  <img
                    src={`/static/uploads/images/${news.image}`}
                    // src={`https://picsum.photos/1000/400`}
                    className="w-100 shadow rounded my-2"
                  />
                </Col>
                <Col sm={12} className="bg-white rounded shadow-sm w-100">
                  <div
                    className="post-body my-5"
                    dangerouslySetInnerHTML={{ __html: news.body }}
                  ></div>
                </Col>
              </Row>
            </Col>
            <Col sm={3} className="my-5">
              <div
                sm={12}
                md={4}
                className="others-container d-flex justify-content-start flex-column align-items-start"
              >
                <h5 className="other-title pr-3">دیگر مقالات</h5>
                <ul className="p-0 text-right">
                  {allNews.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={`/news/${encodeURI(item.title)}`}>
                          <a>
                            <span className="text-main">{item.title}</span>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}
