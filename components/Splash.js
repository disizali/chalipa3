import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";
export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1
    };
  }

  changeSelected(e) {
    const cableImage = document.getElementById("cable-image");
    cableImage.style.left = `-18%`;
    cableImage.style.opacity = `0`;
    const behindText = document.getElementById("behind-text");
    behindText.style.letterSpacing = `50px`;
    const btnShowCategory = document.getElementById("btn-show-category");
    btnShowCategory.style.width = `90px`;
    setTimeout(() => {
      this.setState({ selected: e });
    }, 500);
    setTimeout(() => {
      cableImage.style.left = `-20%`;
      cableImage.style.opacity = `1`;
      behindText.style.letterSpacing = `40px`;
      btnShowCategory.style.width = `100px`;
    }, 550);
  }

  render() {
    const { selected } = this.state;
    return (
      <section className="splash">
        <Row className="splash-bg">
          <Col md={3}>
            <Container className="d-flex flex-column justify-content-center align-items-center p-5 text-center h-100">
              <div className="extra">
                <div className="mb-5 px-5">
                  <div className="slpash-circle">
                    <i className="fas fa-envelope mr-2 text-muted"></i>
                    info@chalipacable.ir
                  </div>
                </div>
                <div className="my-5 px-5">
                  <div className="slpash-circle">
                    <i className="fas fa-phone mr-2 text-muted"></i>
                    <span className="ml-2">021-88525503-5</span>
                  </div>
                </div>
                <div className="mt-5 px-5 w-100">
                  <div className="slpash-circle">
                    <i className="fab fa-instagram mx-3"></i>
                    <i className="fab fa-twitter mx-3"></i>
                    <i className="fab fa-facebook mx-3"></i>
                  </div>
                </div>
              </div>
            </Container>
          </Col>
          <Col sm={12} md={3} className="d-flex align-items-center">
            <Container className="d-flex flex-column justify-content-center p-5">
              <div className="categories rtl text-right ">
                <div
                  className={`mb-sm-2 mb-md-4 splash-category px-4 ${
                    selected == 1 ? "active" : ""
                  }`}
                  onClick={() => this.changeSelected(1)}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={`/static/images/cable-low${
                        selected == 1 ? "-active" : ""
                      }.png`}
                      className="cable-icon"
                      height="auto"
                      alt="cable low icon"
                    />
                    <h2 className="m-0">کابل فشار ضعیف</h2>
                  </div>
                </div>
                <div
                  className={`my-sm-2 my-md-4 splash-category px-4 ${
                    selected == 2 ? "active" : ""
                  }`}
                  onClick={() => this.changeSelected(2)}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={`/static/images/cable-medium${
                        selected == 2 ? "-active" : ""
                      }.png`}
                      className="cable-icon"
                      alt="cable medium icon"
                    />
                    <h2 id="category-2" className="m-0">
                      کابل فشار متوسط
                    </h2>
                  </div>
                </div>
                {/* 
                <div
                  className={`mt-sm-2 mt-md-4 splash-category  px-5 ${
                    selected == 3 ? "active" : ""
                  }`}
                  onClick={() => this.changeSelected(3)}
                >
                  <img
                    src={`/static/images/cable-high${
                      selected == 3 ? "-active" : ""
                    }.png`}
                    className="cable-icon"
                  />
                  <span>کابل فشار قوی</span>
                </div> */}
              </div>
            </Container>
          </Col>
          <Col
            sm={12}
            md={6}
            className="justify-content-end d-flex align-items-center"
          >
            <div className="cable-container d-flex align-items-center justify-content-start">
              {[1, 2].map(item => {
                <img
                  src={`/static/images/cable-${selected}.png`}
                  hidden
                  alt="hidden cable file"
                />;
              })}
              <img
                src={`/static/images/cable-${selected}.png`}
                className="cable-image"
                id="cable-image"
                alt="hidden cable file"
              />
              <span id="behind-text">CHALIPA</span>
              <Link
                href={`/category/${
                  selected == 1
                    ? encodeURI("کابل فشار ضعیف")
                    : encodeURI("کابل فشار متوسط")
                }`}
              >
                <a id="btn-show-category" title="show category">
                  مشاهده
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}
