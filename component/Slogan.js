import React from "react";
import { Container } from "reactstrap";
export default class Slogan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "/static/images/splash-1.jpg"
    };
  }
  render() {
    return (
      <section className="slogan d-flex flex-column">
        <Container>
          <div className="d-block m-2">
            <span>
             فروش پایان یک معامله نیست , آغاز یک <strong>تعهد</strong> است .
            </span>
          </div>
          <div className="d-block m-2">
            <p>
              <b>چلیپا کابل پویا</b> مرجعی برای خرید انواع سیم و کابل
              با استانداردهای توانیر پیشرو در ارائه خدمات به پروژه های نفت و
              گاز و پتروشیمی و پالایشگاهی , فولادی و سیمانی و...
              <br />
              ما میتوانیم برای کمک به شما تجاربمان را در اختیارتان بگذاریم
            </p>
          </div>
        </Container>
      </section>
    );
  }
}
