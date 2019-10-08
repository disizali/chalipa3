import React, { Component } from "react";
import { Container, Button, Table } from "reactstrap";
import axios from "axios";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", articles: [] };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/articles").then(({ data }) => {
      this.setState({ articles: data });
    });
  }

  sendPost() {
    const { title, body, articles } = this.state;
    axios
      .post("http://localhost:3000/api/articles", { title, body })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        }
        const newArticles = [
          { id: articles.length + 1, title, body },
          ...articles
        ];
        return this.setState({ title: "", body: "", articles: newArticles });
      });
  }

  deletePost(targetId) {
    const { articles } = this.state;
    axios
      .delete("http://localhost:3000/api/articles", { data: { targetId } })
      .then(({ data }) => {
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
  bodyChangeHandler(e) {
    this.setState({ body: e.target.value });
  }
  render() {
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
          <textarea
            type="text"
            className="panel-editor my-2"
            placeholder="متن مقاله"
            onChange={this.bodyChangeHandler.bind(this)}
            value={this.state.body}
          ></textarea>
          <Button color="primary" onClick={this.sendPost.bind(this)}>
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
                        onClick={() => this.deletePost(item.id)}
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
