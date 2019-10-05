import React from "react";
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
        <div className="d-block m-2">
          <span>
            فروش پایان یک معامله نیست , <strong>آغاز یک تعهد</strong> است .
          </span>
        </div>
        <hr />
        <div className="d-block m-2">
          <p>
          <strong>چلیپا کابل پویا</strong> مرجعی برای خرید انواع سیم و کابل با استانداردهای
            توانیر پیشرو در ارائه خدمات به پروژه های نفت و گاز و پتروشیمی و
            پالایشگاهی , فولادی و سیمانی و... ما میتوانیم برای کمک به شما
            تجاربمان را در اختیارتان بگذاریم
          </p>
        </div>
      </section>
    );
  }
}
