import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      image: "",
      subtitle: "",
      details: "",
      description: "",
      technicalTable: "",
      categories: [],
      images: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/categories")
      .then(({ data: categories }) => {
        this.setState({ categories });
      });
    axios.get("http://localhost:3000/api/images").then(({ data: images }) => {
      this.setState({ images });
    });
  }

  render() {
    return (
      <section className="product">
        <Container className="p-5">
          <h2 className="text-light">افزودن محصول جدید</h2>
          <input
            type="text"
            className="panel-editor my-2 w-100"
            placeholder="اسم محصول"
          />
          <Row>
            <Col sm={2}>
              <span className="text-light">دسته بندی :</span>
            </Col>
            <Col sm={10}>
              <select className="w-100 panel-editor">
                {this.state.categories.map(item => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </Col>
          </Row>
          <input
            type="text"
            className="panel-editor my-2 w-100"
            placeholder="درباره محصول"
          />
          <textarea
            type="text"
            className="panel-editor my-2 w-100"
            placeholder="متن توضیحات"
          ></textarea>
          <Row className="my-3">
            <Col sm={2}>
              <span className="text-light">تصویر محصول :</span>
            </Col>
            <Col sm={10}>
              <select className="w-100 panel-editor">
                {this.state.images.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={2}>
              <span className="text-light">مشخصات :</span>
            </Col>
            <Col sm={10}>
              <select className="w-100 panel-editor">
                {this.state.images.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={2}>
              <span className="text-light">جدول فنی :</span>
            </Col>
            <Col sm={10}>
              <select className="w-100 panel-editor">
                {this.state.images.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </Col>
          </Row>
          <Button className="form-control" color="primary">افزودن</Button>
        </Container>
      </section>
    );
  }
}
