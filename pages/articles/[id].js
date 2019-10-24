import { Component } from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import axios from "axios";
export default class Articles extends Component {
  static async getInitialProps(context) {
    const id = context.query.id;
    const host =
      context.req != undefined
        ? `http://${context.req.headers.host}`
        : `${window.location.origin}`;

    const { data: article } = await axios.get(`${host}/api/articles/${id}`);
    const { data: allArticles } = await axios.get(`${host}/api/articles`);
    return { article, allArticles };
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
    const { article, allArticles } = this.props;
    return (
      <Layout>
        <Container className="my-4 py-5 rtl text-right">
          <Row>
            <Col sm={12} md={9}>
              <h1 className="news-title pr-3 my-2"> {article.title}</h1>
              <p className="news-date my-2">
                <span className="mx-2">نوشته شده در </span>
                <span>{this.getDiffrents(article.createdAt)}</span>
                <span className="mr-2"> روز پیش</span>
              </p>
              <img
                src={`/static/uploads/images/${article.image}`}
                // src={`https://picsum.photos/1000/400`}
                className="w-100 shadow rounded my-2"
              />
            </Col>
            <Col className="my-5">
              <div
                sm={12}
                md={4}
                className="others-container d-flex justify-content-start flex-column align-items-start"
              >
                <h5 className="other-title pr-3">دیگر مقالات</h5>
                <ul className="p-0 text-right">
                  {allArticles.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={`/articles/${item.id}`}>
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
          <Col sm={12} md={2}>
            <div
              className="content post-body my-5"
              dangerouslySetInnerHTML={{ __html: article.body }}
            ></div>
          </Col>
        </Container>
      </Layout>
    );
  }
}
