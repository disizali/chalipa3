import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Product from "./Product";
import Article from "./Article";
import News from "./News";
import Prices from "./Prices";
import Images from "./Images";
import Messages from "./Messages";

export class panel extends Component {
  constructor(props) {
    super(props);
    this.state = { panel: 1 };
  }
  getPanel() {
    const { panel } = this.state;
    switch (panel) {
      case 1:
        return <Product />;
      case 2:
        return <Article />;
      case 3:
        return <News />;
      case 4:
        return <Prices />;
      case 5:
        return <Images />;
      case 6:
        return <Messages />;
    }
  }
  changePanel(panel) {
    if (panel !== this.state.panel) this.setState({ panel });
  }
  render() {
    const { panel } = this.state;
    const actions = [
      ["shopping-cart", "محصولات"],
      ["newspaper", "مقالات"],
      ["rss", "اخبار"],
      ["dollar-sign", "لیست قیمت"],
      ["images", "تصاویر"],
      ["envelope", "پیام ها"]
    ];
    return (
      <div className="h-100 w-100">
        <nav className="rtl bg-white w-100 d-flex justify-content-between px-5 shadow-sm align-items-center position-fixed">
          <div className="d-flex">
            <div className="border-left d-flex align-items-center px-3 ">
              <img
                src="/static/images/apadana.jpg"
                width="60"
                alt="vira web apadana | apweb"
              />
              <span className="text-dark mr-3">ویرا وب آپادانا</span>
            </div>
            <div className="text-left d-flex flex-column align-items-center justify-content-end px-3">
              <div className="w-100">
                <span className="mx-1">021-44259688</span>
                <i className="fas fa-phone tiny-icon mx-1"></i>
              </div>
              <div className="w-100">
                <span className="mx-1">021-44259611</span>
                <i className="fas fa-phone tiny-icon mx-1"></i>
              </div>
            </div>
          </div>
          <a href="http://apweb.ir">APWEB.IR</a>
        </nav>
        <div className="dashboard-container">
          <Row className="rtl text-right panel h-100 w-100 p-0 m-0">
            <Col sm={12} md={1} className="panel-actions h-100 w-100 p-0 m-3">
              <div className="m-2 bg-white shadow-sm position-fixed">
                <ul className="w-100">
                  {actions.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`d-flex flex-column text-center ${panel ==
                          index + 1 && "active"}`}
                        onClick={() => this.changePanel(index + 1)}
                      >
                        <i className={`m-0 p-0 my-1 fa fa-${item[0]}`}></i>
                        <span className="m-0 p-0 my-1">{item[1]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col
              sm={12}
              md={10}
              className="panel-container p-0 bg-white m-4 shadow"
            >
              {this.getPanel()}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default panel;
