import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

export default class Samples extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const simpleParallax = require("simple-parallax-js");
    document.getElementsByClassName;
    new simpleParallax();
  }
  render() {
    const { products } = this.props;
    return (
      <section className="samples mt-5">
        <Container className="text-center">
          <h3 className="m-3">برخی از محصولات ما</h3>
          <Row>
            {products.map((item, index) => {
              return (
                <Col
                  className="d-flex flex-column justify-content-center"
                  key={index}
                  sm={6}
                  md={3}
                >
                  <Link href={`/category/${item.category}/products`}>
                    <a className="sample-column">
                      <img
                        src={`/static/uploads/images/${item.image}`}
                        alt={`${item.title} sample`}
                        className="sample-image"
                        width="100%"
                      />
                      <span className="sample-title">{item.name}</span>
                    </a>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
  }
}
