import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import axios from "axios";
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  async componentDidMount() {
    const { data: articles } = await axios.get(
      "http://localhost:3000/api/articles"
    );
    this.setState({ articles });
  }

  render() {
    const { articles } = this.state;
    return (
      <footer>
        <Container>
          <Row className="rtl text-right p-4">
            <Col sm={12} md={4}>
              <h3>دسترسی سریع</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a>خانه</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a>محصولات</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>تماس با ما</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>گالری تصاویر</a>
                  </Link>
                </li>
                <li>
                  <Link href="/articles">
                    <a>مقالات</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>درباره ما</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h3>جدیدترین مقالات</h3>
              <ul>
                {articles.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={`/articles/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h3>اطلاعات تماس</h3>
              <ul>
                <li>
                  آدرس: تهران-خیابان بهشتی ,بعد از خیابان کاووسی فر , پلاک 202
                  طبقه دوم
                </li>
                <li>پست الکترونیک: info@chalipacable.ir</li>
                <li>شماره تماس: 5-88525503-021</li>
                <li>
                  <i className="fab fa-instagram mx-2"></i>
                  <i className="fab fa-twitter mx-2"></i>
                  <i className="fab fa-facebook mx-2"></i>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
