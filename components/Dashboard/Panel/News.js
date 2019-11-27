import React, { Component } from "react";
import { Container, Button, Table, Row, Col } from "reactstrap";
import * as api from "../../../src/api";
import Head from "next/head";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      selectedImage: "",
      news: [],
      images: [],
      editable: false
    };
    this.startEdit = this.startEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.edit = this.edit.bind(this);
  }

  startEdit(id) {
    const news = this.state.news.find(item => item.id == id);
    this.setState({
      title: news.title,
      body: news.body,
      selectedImage: news.image,
      editable: id
    });
  }
  cancelEdit() {
    this.setState({
      title: "",
      body: "",
      editable: false,
      selectedImage: this.state.images[0]
    });
  }
  edit() {
    const { title, body, selectedImage, news, editable } = this.state;
    if (!title || !body || !selectedImage)
      return alert("لطفا در ورودی های خود دقت نمایید");
    api
      .editNews({
        id: editable,
        title,
        body,
        selectedImage
      })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        }
        const newNews = news.map(item => {
          if (item.id == editable) {
            item.title = title;
            item.image = selectedImage;
            item.body = body;
          }
          return item;
        });
        this.cancelEdit();
        return this.setState({
          title: "",
          body: "",
          selectedImage: this.state.images[0],
          news: newNews
        });
      });
  }

  async componentDidMount() {
    const editor = document.querySelector("#editor p");
    editor.classList = [...editor.classList, "ql-align-right ql-direction-rtl"];

    this.setState({ news: await api.getNews() });
    const images = await api.getImages();
    this.setState({ images, selectedImage: images[0] });
  }

  sendNews() {
    const { title, body, selectedImage, news } = this.state;
    api
      .sendNews({
        title,
        body,
        image: selectedImage
      })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        }
        const newArticles = [{ id: data.id, title, body }, ...news];
        return this.setState({ title: "", body: "", news: newArticles });
      });
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

  deleteNews(targetId) {
    const { news } = this.state;
    api.deleteNews({ data: { targetId } }).then(({ data }) => {
      if (data == "no news") {
        return;
      }
      return this.setState({
        news: news.filter(item => item.id !== targetId)
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
    const { editable } = this.state;
    return (
      <div className="panel-article">
        <Head>
          <script src="https://cdn.tiny.cloud/1/ixg2s2h2b5r0csl2c9vkzcke0rqoxxjqor825rn9ba0k7io2/tinymce/5/tinymce.min.js" />
                 <script>tinymce.init({{ selector: "#mytextarea" }});</script>
        </Head>
        <Container className="p-5 d-flex flex-column">
          <h2 className="text-dark">افزودن خبر جدید</h2>
          <input
            type="text"
            className="panel-editor my-2"
            placeholder="سربرگ"
            onChange={this.titleChangeHandler.bind(this)}
            value={this.state.title}
          />
          <span className="my-2 text-dark">متن خبر :</span>
          <div id="editor">
            <textarea id="mytextarea" />
            {/* <ReactQuill
              value={this.state.body}
              className="panel-editor rtl text-center text-dark"
              theme="snow"
              modules={this.modules()}
              formats={this.formats()}
              style={{ direction: "rtl" }}
              onChange={this.bodyChangeHandler.bind(this)}
            /> */}
          </div>
          <Row className="my-3">
            <Col sm={2}>
              <span className="text-dark">تصویر :</span>
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
          <div className={`${editable ? "d-none" : "d-block"}`}>
            <Button
              className="w-100"
              color="primary"
              onClick={this.sendNews.bind(this)}
            >
              ارسال
            </Button>
          </div>
          <div className={`${editable ? "d-flex" : "d-none"}`}>
            <Button
              className="ml-2 w-100"
              color="danger"
              onClick={this.cancelEdit}
            >
              لغو
            </Button>
            <Button
              className="mr-2 w-100"
              color="warning"
              onClick={this.edit.bind(this)}
            >
              ذخیره
            </Button>
          </div>
          <br />
          <hr className="bg-muted text-warning w-100 h-100" />
          <br />
          <h2 className="text-dark">لیست اخبار</h2>
          <Table responsive bordered className="text-right">
            <thead>
              <tr>
                <th width="70%">سربرگ</th>
                <th width="30%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.news.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>
                      <Button
                        color="danger"
                        className="mx-2"
                        onClick={() => this.deleteNews(item.id)}
                      >
                        <i className="fas fa-trash mx-2"></i>
                        <span className="mx-2">حذف</span>
                      </Button>
                      <Button
                        color="warning"
                        className="mx-2"
                        onClick={() => this.startEdit(item.id)}
                      >
                        <i className="fas fa-pen mx-2"></i>
                        <span className="mx-2">ویرایش</span>
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
