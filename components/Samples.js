import React from "react";
import { Container, Row, Col } from "reactstrap";
export default class Samples extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const simpleParallax = require("simple-parallax-js");
    document.getElementsByClassName
    new simpleParallax()
  }
  render() {
    return (
      <section className="samples mt-5">
        <Container className="text-center">
          <h3 className="m-3">برخی از محصولات ما</h3>
          <Row>
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <Col
                  className="d-flex flex-column justify-content-center sample-column"
                  key={index}
                >
                  <img
                    src={`https://picsum.photos/20${index}`}
                    alt={`sample-${index}`}
                    className="sample-image"
                  />
                  <span className="sample-title">sample {item}</span>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
  }
}
