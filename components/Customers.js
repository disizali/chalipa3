import React from "react";
import { Container, Row, Col } from "reactstrap";
export default class Customers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="Customers my-5">
        <Container className="text-center">
          <h3 className="m-3">مشتری های ما</h3>
          <Row>
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <Col
                  sm={4}
                  md={2}
                  className="d-flex flex-column justify-content-center customer-column p-2"
                  key={index}
                >
                  {/* <img
                    src={`https://picsum.photos/20${index}/50`}
                    alt={`customer-${index}`}
                    className="customer-image"
                  />
                  <span className="customer-title">مشتری {item}</span> */}
                  <div className="customer-container">
                    <img
                      src={`https://picsum.photos/2${index}`}
                      className="customer-logo rounded"
                      alt={`customer-${item}`}
                    />
                    <span className="customer-title">مشتری {item}</span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
  }
}
