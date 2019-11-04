import React from "react";
import { Container, Row, Col, Button, Table } from "reactstrap";
import * as api from "../../../src/api";

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      image: "",
      details: "",
      technicalTable: "",
      subtitle: "",
      description: "",
      categories: [],
      images: [],
      products: [],
      editable: false
    };
    this.cancelEdit = this.cancelEdit.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }
  async componentDidMount() {
    const editor = document.querySelector("#editor p");
    editor.classList = [...editor.classList, "ql-align-right ql-direction-rtl"];
    const categories = await api.getCategories();
    let finalCategories = [];
    categories.forEach(item => {
      finalCategories = [...finalCategories, ...item.subCategories];
    });
    this.setState({
      categories: finalCategories,
      category: finalCategories[0].id
    });

    this.setState({ products: await api.getProducts() });
    const images = await api.getImages();

    this.setState({
      images,
      image: images[0],
      details: images[0],
      technicalTable: images[0]
    });
  }
  startEdit(editable) {
    const { products } = this.state;
    const product = products.find(item => item.id == editable);
    this.setState({ ...product, editable });
  }
  cancelEdit() {
    this.setState({
      name: "",
      category: "",
      image: this.state.images[0],
      subtitle: "",
      details: this.state.images[0],
      description: "",
      technicalTable: this.state.images[0],
      editable: false
    });
  }
  editProduct(id) {
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

    api.updateProduct({ ...data, id }).then(({ data }) => {
      if (data == "updated") {
        const newProducts = this.state.products.map(item => {
          if (item.id == id) {
            item.name = name;
            item.category = category;
            item.image = image;
            item.subtitle = subtitle;
            item.details = details;
            item.description = description;
            item.technicalTable = technicalTable;
          }
          return item;
        });
        this.setState({ product: newProducts });
        this.cancelEdit();
      }
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
  descriptionChangeHandler(description) {
    this.setState({ description });
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

  modules() {
    return {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ header: 1 }, { header: 2 }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" }
        ],
        [{ direction: "rtl" }],
        [{ align: [] }],
        [{ color: [] }],
        ["image", "link"],
        [{ background: [] }],
        ["clean"]
      ]
    };
  }
  formats() {
    return [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "align",
      "link",
      "color",
      "background",
      "direction",
      "image"
    ];
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
    api.sendProduct(data).then(({ data: id }) => {
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
    api
      .deleteProduct({
        data: { targetId }
      })
      .then(({ data }) => {
        this.setState({
          products: this.state.products.filter(item => item.id != targetId)
        });
      });
  }

  render() {
    const ReactQuill = require("react-quill");
    const { editable } = this.state;
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
          <textarea
            type="text"
            className="panel-editor my-2 w-100"
            placeholder="درباره محصول"
            value={this.state.subtitle}
            onChange={this.subtitleChangeHandler.bind(this)}
          ></textarea>
          <span className="my-2 text-light">متن توضیحات :</span>
          <div id="editor">
            <ReactQuill
              value={this.state.description}
              className="panel-editor rtl text-center text-light"
              theme="snow"
              modules={this.modules()}
              formats={this.formats()}
              style={{ direction: "rtl" }}
              onChange={this.descriptionChangeHandler.bind(this)}
            />
          </div>

          <Row className="my-3">
            <Col sm={2}>
              <span className="text-light">تصویر محصول :</span>
            </Col>
            <Col sm={10}>
              <select
                className="w-100 panel-editor ltr"
                value={this.state.image}
                onChange={this.imageChangeHandler.bind(this)}
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
            style={{ display: editable ? "none" : "block" }}
          >
            افزودن
          </Button>
          <div style={{ display: editable ? "flex" : "none" }}>
            <Button
              className="form-control mx-1"
              color="warning"
              onClick={() => this.editProduct(this.state.editable)}
            >
              ویرایش
            </Button>
            <Button
              className="form-control mx-1"
              color="danger"
              onClick={() => this.cancelEdit()}
            >
              لغو
            </Button>
          </div>

          <br />
          <hr className="bg-muted text-warning w-100 h-100" />
          <br />

          <Table responsive bordered dark className="text-right">
            <thead>
              <tr>
                <th width="60%">نام</th>
                <th width="40%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                      <Button
                        className="mx-2"
                        color="danger"
                        onClick={() => this.deleteProduct(item.id)}
                      >
                        <i className="fas fa-trash mx-1"></i>
                        <span className="mx-1">حذف</span>
                      </Button>
                      <Button
                        className="mx-2"
                        color="warning"
                        onClick={() => this.startEdit(item.id)}
                      >
                        <i className="fas fa-pen mx-1"></i>
                        <span className="mx-1">ویرایش</span>
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
