import React from "react";
import Layout from "../../components/Layout";
import Router from "next/router";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
export default class Category extends React.Component {
  static async getInitialProps(context) {
    const { res } = context;
    console.log(context.query);
    let {
      query: { title }
    } = context;
    title = encodeURI(title);
    const { data: category } = await axios.get(
      `http://95.216.86.208/api/categories/${title}`
    );
    console.log(category);
    if (category.subCategories.length >= 1) {
      return { category };
    } else {
      if (res) {
        res.writeHead(302, {
          Location: `/category/${title}/products`
        });
        res.end();
      } else {
        Router.push(`/category/${title}/products`);
      }
      return {};
    }
  }
  constructor(props) {
    super(props);
  }
  render() {
    const { category } = this.props;
    return (
      <Layout>
        <div className="category-div">
          <div className="category-image-container">
            <img
              src="/static/images/cables-cover.png"
              className="category-image"
              width="100%"
            />
          </div>
          <img src="/static/images/wave.png" className="wave" width="100%" />
          <h1 className="text-white m-5 category-title">{category.title}</h1>
          <p className="m-5 category-description text-light text-right rtl">
            {category.description}
          </p>
          <div className="w-100 h-100">
            <Container className="category-cintainer">
              <Row className="justify-content-center text-right rtl">
                {category.subCategories.map((item, index) => {
                  return (
                    <Col sm={4} className={`mb-5`} key={index}>
                      <Link href={`${item.title}/products`}>
                        <a className="d-flex justify-content-start align-items-center">
                          {/* <span className="category-logo text-dark shadow mx-2 d-flex justify-content-center align-items-center">
                          <img
                            src="/static/images/cable-low.png"
                            alt={item.title}
                            width="50%"
                          />
                        </span>
                        <span className="mx-2">{item.title}</span> */}
                          <div
                            style={{
                              background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1) ),url(http://picsum.photos/seed/item${item.id}/200/100?blur=9) no-repeat`,
                              backgroundSize: `100% 100%`
                            }}
                            className="category-item d-flex justify-content-center align-items-center"
                          >
                            <h5 className="text-center text-white">
                              {item.title}
                            </h5>
                          </div>
                        </a>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        </div>
      </Layout>
    );
  }
}