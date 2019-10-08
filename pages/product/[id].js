import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
export default class Product extends React.Component {
  static async getInitialProps(context) {
    const products = require("../../static/data/products.json");

    const product = products.find(item => {
      return item.id == context.query.id;
    });
    if (product == undefined) {
      return { error: true };
    }
    return {
      product,
      productsList: products.filter(item => item.category == product.category)
    };
  }

  constructor(props) {
    super(props);
    this.state = { selected: props.product, tab: 1 };
    this.changeTab.bind(this);
  }
  changeProduct(e) {
    if (e == this.state.selected.id) return;
    const selected = this.props.productsList.find(item => item.id == e);
    const productContainer = document.getElementById("product-container");
    productContainer.style.transform = `scale(0.99)`;
    productContainer.style.filter = `blur(10px)`;
    productContainer.style.opacity = `0.3`;
    setTimeout(() => {
      productContainer.style.transform = `scale(1)`;
      productContainer.style.filter = ``;
      this.setState({ selected });
      productContainer.style.opacity = `1`;
    }, 300);
  }
  changeTab(e) {
    if (e == this.state.tab) return;
    const tabContainer = document.getElementById("tab-container");
    tabContainer.style.opacity = 0;
    setTimeout(() => {
      tabContainer.style.opacity = 1;
      this.setState({ tab: e });
    }, 300);
  }
  render() {
    const { selected, tab } = this.state;
    const { productsList } = this.props;
    return (
      <Layout>
        <main className="product">
          <Row className="rtl text-right">
            <Col sm={12} md={3} lg={2} className="products-list border-left">
              <h3 className="px-5">محصولات</h3>
              <ul>
                {productsList.map((item, index) => {
                  return (
                    <li
                      className={`px-5 d-flex align-items-center ${item.id ==
                        selected.id && "active"}`}
                      key={index}
                      onClick={() => this.changeProduct(item.id)}
                    >
                      <i className="mx-2"></i>
                      <span className="mx-2">{item.title}</span>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col sm={12} md={9} lg={10} className="p-5">
              <Row
                className="product-container justify-content-between"
                id="product-container"
              >
                <Col sm={12} md={8} lg={6} xl={2}>
                  <img src={selected.image} className="product-image" />
                </Col>
                <Col sm={12} md={8} lg={9} xl={10}>
                  <h1 className="product-title">{selected.title}</h1>
                  <p className="product-subtitle">{selected.subtitle}</p>
                  <hr />
                  <div className="d-flex flex-column">
                    <Row className="my-2 mx-0">
                      <Col
                        sm={2}
                        className={`d-flex align-items-center product-tab ${tab ==
                          1 && "active"}`}
                        onClick={() => this.changeTab(1)}
                      >
                        توضیحات
                      </Col>
                      <Col
                        sm={2}
                        className={`d-flex align-items-center product-tab ${tab ==
                          2 && "active"}`}
                        onClick={() => this.changeTab(2)}
                      >
                        مشخصات
                      </Col>
                      <Col
                        sm={2}
                        className={`d-flex align-items-center product-tab ${tab ==
                          3 && "active"}`}
                        onClick={() => this.changeTab(3)}
                      >
                        جدول فنی
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <img src={selected.details} hidden />
                        <img src={selected.technicalTable} hidden />
                        <div className="tab-container" id="tab-container">
                          {tab == 1 && (
                            <div
                              className="p-3 w-100 h-100 bg-white shadow-lg rounded"
                              dangerouslySetInnerHTML={{
                                __html: selected.description
                              }}
                            ></div>
                          )}
                          {tab == 2 && (
                            <img
                              src={selected.details}
                              className="w-75 shadow-lg rounded"
                            />
                          )}
                          {tab == 3 && (
                            <img
                              src={selected.technicalTable}
                              className="w-75 shadow-lg rounded"
                            />
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </main>
      </Layout>
    );
  }
}
