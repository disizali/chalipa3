import React from "react";
import { Container, Row, Col, Button, Table } from "reactstrap";
import axios from "axios";

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      image: "",
      subtitle: "",
      details: "",
      description: "",
      technicalTable: "",
      categories: [],
      images: [],
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/categories")
      .then(({ data: categories }) => {
        this.setState({ categories, category: categories[0].id });
      });
    axios
      .get("http://localhost:3000/api/products")
      .then(({ data: products }) => {
        this.setState({ products });
      });
    axios.get("http://localhost:3000/api/images").then(({ data: images }) => {
      this.setState({
        images,
        image: images[0],
        details: images[0],
        technicalTable: images[0]
      });
    });
  }

  nameChangeHandler(e) {
    this.setState({ name: e.target.value });
  }
  categoryChangeHandler(e) {
    this.setState({ category: e.target.value });
  }
  subtitleChangeHandler(e) {
    this.setState({ subtitle: e.target.value });
  }
  descriptionChangeHandler(e) {
    this.setState({ description: e.target.value });
  }
  imageChangeHandler(e) {
    this.setState({ image: e.target.value });
  }
  detailsChangeHandler(e) {
    this.setState({ details: e.target.value });
  }
  technicalTableChangeHandler(e) {
    this.setState({ technicalTable: e.target.value });
  }

  sendProduct() {
    const {
      name,
      category,
      image,
      subtitle,
      details,
      description,
      technicalTable
    } = this.state;

    const data = {
      name,
      category,
      image,
      subtitle,
      details,
      description,
      technicalTable
    };
    axios
      .post("http://localhost:3000/api/products", data)
      .then(({ data: id }) => {
        this.setState({
          products: [{ id, name }, ...this.state.products],
          name: "",
          category: "",
          image: "",
          subtitle: "",
          details: "",
          description: "",
          technicalTable: ""
        });
      });
  }

  deleteProduct(targetId) {
    axios
      .delete("http://localhost:3000/api/products", {
        data: { targetId }
      })
      .then(({ data }) => {
        this.setState({
          products: this.state.products.filter(item => item.id != targetId)
        });
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
            value={this.state.name}
            onChange={this.nameChangeHandler.bind(this)}
          />
          <Row>
            <Col sm={2}>
              <span className="text-light">دسته بندی :</span>
            </Col>
            <Col sm={10}>
              <select
                className="w-100 panel-editor"
                value={this.state.category}
                onChange={this.categoryChangeHandler.bind(this)}
              >
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
            value={this.state.subtitle}
            onChange={this.subtitleChangeHandler.bind(this)}
          />
          <textarea
            type="text"
            className="panel-editor my-2 w-100"
            placeholder="متن توضیحات"
            value={this.state.description}
            onChange={this.descriptionChangeHandler.bind(this)}
          ></textarea>
          <Row className="my-3">
            <Col sm={2}>
              <span className="text-light">تصویر محصول :</span>
            </Col>
            <Col sm={10}>
              <select className="w-100 panel-editor ltr">
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
              <select
                className="w-100 panel-editor ltr"
                value={this.state.details}
                onChange={this.detailsChangeHandler.bind(this)}
              >
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
              <select
                className="w-100 panel-editor ltr"
                value={this.state.technicalTable}
                onChange={this.technicalTableChangeHandler.bind(this)}
              >
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
          <Button
            className="form-control"
            color="primary"
            onClick={this.sendProduct.bind(this)}
          >
            افزودن
          </Button>
          <br />
          <hr className="bg-muted text-warning w-100 h-100" />
          <br />
          <Table responsive bordered dark className="text-right">
            <thead>
              <tr>
                <th width="80%">نام</th>
                <th width="20%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => this.deleteProduct(item.id)}
                      >
                        <i className="fas fa-trash mx-2"></i>
                        <span className="mx-2">حذف</span>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </section>
    );
  }
}
