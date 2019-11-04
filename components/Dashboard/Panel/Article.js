import React, { Component } from "react";
import { Container, Button, Table, Row, Col } from "reactstrap";
import * as api from "../../../src/api";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", articles: [], images: [] };
  }

  async componentDidMount() {
    const editor = document.querySelector("#editor p");
    editor.classList = [...editor.classList, "ql-align-right ql-direction-rtl"];
    this.setState({ articles: await api.getArticles() });
    const images = await api.getImages();
    this.setState({ images, selectedImage: images[0] });
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

  sendArticle() {
    const { title, body, selectedImage, articles } = this.state;
    api
      .sendArticle({
        title,
        body,
        selectedImage
      })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        }
        const newArticles = [{ id: data.id, title, body }, ...articles];
        return this.setState({
          title: "",
          body: "",
          selectedImage: "",
          articles: newArticles
        });
      });
  }

  deleteArticle(targetId) {
    const { articles } = this.state;
    api.deleteArticle({ data: { targetId } }).then(({ data }) => {
      if (data == "no article") {
        return;
      }
      return this.setState({
        articles: articles.filter(item => item.id !== targetId)
      });
    });
  }
  titleChangeHandler(e) {
    this.setState({ title: e.target.value });
  }
  bodyChangeHandler(body) {
    this.setState({ body });
  }
  imageChangeHandler(e) {
    this.setState({ selectedImage: e.target.value });
  }
  render() {
    const ReactQuill = require("react-quill");
    return (
      <div className="panel-article">
        <Container className="p-5 d-flex flex-column">
          <h2 className="text-light">افزودن مقاله جدید</h2>
          <input
            type="text"
            className="panel-editor my-2"
            placeholder="سربرگ"
            onChange={this.titleChangeHandler.bind(this)}
            value={this.state.title}
          />
          <div id="editor">
            <ReactQuill
              value={this.state.body}
              className="panel-editor rtl text-center text-light"
              theme="snow"
              modules={this.modules()}
              formats={this.formats()}
              style={{ direction: "rtl" }}
              onChange={this.bodyChangeHandler.bind(this)}
            />
          </div>
          <Row className="my-3">
            <Col sm={2}>
              <span className="text-light">تصویر :</span>
            </Col>
            <Col sm={10}>
              <select
                className="w-100 panel-editor ltr"
                value={this.state.selectedImage}
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
          <Button color="primary" onClick={this.sendArticle.bind(this)}>
            ارسال
          </Button>
          <br />
          <hr className="bg-muted text-warning w-100 h-100" />
          <br />
          <Table responsive bordered dark className="text-right">
            <thead>
              <tr>
                <th width="80%">سربرگ</th>
                <th width="20%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.articles.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => this.deleteArticle(item.id)}
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
      </div>
    );
  }
}
