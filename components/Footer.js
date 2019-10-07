import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
                {[1, 2, 3].map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={`/articles/${item}`}>
                        <a>مقاله {item}</a>
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
                  <i className="fab fa-instagram"></i>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
