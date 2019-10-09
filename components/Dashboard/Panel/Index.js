import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Product from "./Product";
import Article from "./Article";
import News from "./News";
import Prices from "./Prices";
import Images from "./Images";

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
    }
  }
  changePanel(panel) {
    if (panel !== this.state.panel) this.setState({ panel });
  }
  render() {
    const { panel } = this.state;
    return (
      <div className="h-100 w-100">
        <Row className="rtl text-right panel h-100 w-100 p-0 m-0">
          <Col sm={12} md={2} className="panel-actions h-100 w-100 p-0">
            <ul className="w-100">
              <li
                className={`w-100 h-100 ${panel == 1 && "active"}`}
                onClick={() => this.changePanel(1)}
              >
                <i className="fa fa-plus"></i>
                <span>افزودن محصول</span>
              </li>
              <li
                className={`w-100 h-100 ${panel == 2 && "active"}`}
                onClick={() => this.changePanel(2)}
              >
                <i className="fa fa-newspaper"></i>
                <span>ارسال مقاله</span>
              </li>
              <li
                className={`w-100 h-100 ${panel == 3 && "active"}`}
                onClick={() => this.changePanel(3)}
              >
                <i className="fa fa-rss"></i>
                <span>افزودن خبر</span>
              </li>
              <li
                className={`w-100 h-100 ${panel == 4 && "active"}`}
                onClick={() => this.changePanel(4)}
              >
                <i className="fa fa-dollar-sign"></i>
                <span>ویرایش لیست قیمت</span>
              </li>
              <li
                className={`w-100 h-100 ${panel == 5 && "active"}`}
                onClick={() => this.changePanel(5)}
              >
                <i className="fa fa-images"></i>
                <span>مدیریت تصاویر</span>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={10} className="panel-container">
            {this.getPanel()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default panel;
