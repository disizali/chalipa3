import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="categories mt-5">
        <Container>
          <Row>
            <Col className="category-column" sm="12" md="4">
              <img
                src="/static/images/cable-1.png"
                className="category-image"
              />
              <h1 className="category-title">کابل فشار قوی</h1>
            </Col>
            <Col className="category-column" sm="12" md="4">
              <img
                src="/static/images/cable-2.png"
                className="category-image"
              />
              <h1 className="category-title">کابل فشار متوسط</h1>
            </Col>
            <Col className="category-column" sm="12" md="4">
              <img
                src="/static/images/cable-3.png"
                className="category-image"
              />
              <h1 className="category-title"> کابل فشار ضعیف</h1>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
