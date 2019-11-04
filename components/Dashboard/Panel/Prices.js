import React, { Component } from "react";
import { Table, Container, Button, Row, Col } from "reactstrap";
import axios from "axios";
import * as api from "../../../src/api";
export class Prices extends Component {
  constructor(props) {
    super(props);
    this.state = { prices: [], code: "", price: "", size: "" };
  }

  async componentDidMount() {
      this.setState({ prices : await api.getPrices() });
  }

  sendPrice() {
    const { code, price, size, prices } = this.state;
    api.sendPrice({ code, price, size })
      .then(({ data }) => {
        if (data != "error") {
          const newPrices = [
            { id: data.id, code, size, price },
            ...prices
          ];
          this.setState({ prices: newPrices });
        }
        this.setState({ code: "", price: "", size: "" });
      });
  }
  codeChangeHandler(e) {
    this.setState({ code: e.target.value });
  }
  sizeChangeHandler(e) {
    this.setState({ size: e.target.value });
  }
  priceChangeHandler(e) {
    this.setState({ price: e.target.value });
  }

  deletePrice(targetId) {
    api.deletePrice({ data: { targetId } })
      .then(({ data }) => {
        if (data != "no price") {
          this.setState({
            prices: this.state.prices.filter(item => item.id != targetId)
          });
        }
      });
  }

  render() {
    return (
      <div>
        <Container className="p-5">
          <h2 className="text-light">لیست قیمت ها</h2>
          <Row className="my-2">
            <Col>
              <input
                type="text"
                className="panel-editor w-100"
                placeholder="کد"
                onChange={this.codeChangeHandler.bind(this)}
                value={this.state.code}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="panel-editor w-100"
                placeholder="سایز"
                onChange={this.sizeChangeHandler.bind(this)}
                value={this.state.size}
              />
            </Col>
            <Col>
              <input
                type="number"
                className="panel-editor w-100"
                placeholder="قیمت"
                onChange={this.priceChangeHandler.bind(this)}
                value={this.state.price}
              />
            </Col>
          </Row>
          <Button
            color="primary"
            className="form-control"
            onClick={this.sendPrice.bind(this)}
          >
            افزودن
          </Button>
          <br />
          <hr />
          <br />
          <Table dark responsive bordered>
            <thead>
              <tr>
                <th>کد</th>
                <th>اندازه</th>
                <th>قیمت</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.prices.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.code}</td>
                    <td>{item.size}</td>
                    <td>{item.price.toLocaleString()}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => this.deletePrice(item.id)}
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

export default Prices;
