import React, { Component } from "react";
import { Container, Button, Table, Row, Col } from "reactstrap";
import * as api from "../../../src/api";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  async componentDidMount() {
    this.setState({ messages: await api.getMessages() });
  }

  render() {
    return (
      <div className="panel-messages">
        <Container className="p-5 d-flex flex-column">
          <h2 className="text-dark">پیام ها</h2>
          <Table responsive bordered className="text-right">
            <thead>
              <tr>
                <th width="15%">نام</th>
                <th width="15%">ایمیل</th>
                <th width="15%">تلفن</th>
                <th width="55%">پیام</th>
              </tr>
            </thead>
            <tbody>
              {this.state.messages.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <td>{item.message}</td>
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
