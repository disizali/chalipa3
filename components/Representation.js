import React from "react";
import { Container, Row, Col } from "reactstrap";
export default class Representation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="Customers my-5">
        <Container className="text-center">
          <h3 className="m-3">نمایندگی های ما</h3>
          <Row className="justify-content-center">
            {["نمایندگی کابل خراسان", "نمایندگی کابل شاهین"].map(
              (item, index) => {
                return (
                  <Col
                    sm={6}
                    md={4}
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
                      {/* <img
                        src={`https://picsum.photos/2${index}`}
                        className="customer-logo rounded"
                        alt={`customer-${item}`}
                      /> */}
                      <h5 className="customer-title">{item}</h5>
                    </div>
                  </Col>
                );
              }
            )}
          </Row>
        </Container>
      </section>
    );
  }
}
