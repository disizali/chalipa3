import React, { Component } from "react";
import { Table, Container, Button, Row, Col } from "reactstrap";
import axios from "axios";
import * as api from "../../../src/api";
export class Prices extends Component {
  constructor(props) {
    super(props);
    this.state = { prices: [], code: "", price: "", size: "", editable: false };
    this.startUpdate = this.startUpdate.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  async componentDidMount() {
    this.setState({ prices: await api.getPrices() });
  }

  sendPrice() {
    const { code, price, size, prices } = this.state;
    if (!code || !price || !size)
      return alert("لطفا ورودی های خودتون رو چک بفرمایید");
    api.sendPrice({ code, price, size }).then(({ data }) => {
      if (data != "error") {
        const newPrices = [{ id: data.id, code, size, price }, ...prices];
        this.setState({ prices: newPrices });
      }
      this.setState({ code: "", price: "", size: "" });
    });
  }

  startUpdate(editable) {
    const targetPrice = this.state.prices.find(item => item.id == editable);
    this.setState({
      editable,
      price: targetPrice.price,
      code: targetPrice.code,
      size: targetPrice.size
    });
  }
  cancelUpdate() {
    this.setState({ editable: false, price: "", code: "", size: "" });
  }
  submitUpdate() {
    const { price, code, size, editable } = this.state;
    if (!price || !code || !size) alert("لطفا ورودی های خودتون رو چک کنید");
    api
      .editPrice({ price, code, size, targetId: editable })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        }
        const newPrices = this.state.prices.map(item => {
          if (item.id == editable) {
            item.code = code;
            item.price = price;
            item.size = size;
          }
          return item;
        });
        this.setState({ prices: newPrices, price: "", code: "", size: "" });
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
    api.deletePrice({ data: { targetId } }).then(({ data }) => {
      if (data != "no price") {
        this.setState({
          prices: this.state.prices.filter(item => item.id != targetId)
        });
      }
      this.cancelUpdate();
    });
  }

  render() {
    const { editable } = this.state;
    return (
      <div>
        <Container className="p-5">
          <h2 className="text-dark">افزودن قیمت</h2>
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
          <div style={{ display: editable ? "none" : "block" }}>
            <Button
              color="primary"
              className="form-control"
              onClick={this.sendPrice.bind(this)}
            >
              افزودن
            </Button>
          </div>
          <div style={{ display: editable ? "flex" : "none" }}>
            <Button
              color="danger"
              className="form-control ml-2"
              onClick={this.cancelUpdate.bind(this)}
            >
              لغو
            </Button>
            <Button
              color="warning"
              className="form-control mr-2"
              onClick={this.submitUpdate.bind(this)}
            >
              ذخیره
            </Button>
          </div>
          <br />
          <hr />
          <br />
          <h2 className="text-dark">لیست قیمت ها</h2>
          <Table responsive bordered>
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
                    <td className="d-flex">
                      <Button
                        color="danger"
                        className="mx-2"
                        onClick={() => this.deletePrice(item.id)}
                      >
                        <i className="fas fa-trash mx-2"></i>
                        <span className="mx-2">حذف</span>
                      </Button>
                      <Button
                        color="warning"
                        className="mx-2"
                        onClick={() => this.startUpdate(item.id)}
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

export default Prices;
