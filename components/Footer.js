import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import * as api from "../src/api";
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }
  render() {
    const { articles } = this.props;
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
                  <Link href="/news">
                    <a>اخبار</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>تماس با ما</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/gallery">
                    <a>گالری تصاویر</a>
                  </Link>
                </li> */}
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
                      <Link href={`/articles/${encodeURI(item.title)}`}>
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
                  <a href="https://instagram.com/chalipacable.ir" title="instagram">
                    <i className="fab fa-instagram ml-4"></i>
                  </a>
                  <a href="https://www.facebook.com/chalipa.cable.9" title="facebook">
                    <i className="fab fa-facebook mr-4"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
