import React, { Component } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import _ from "lodash";
import * as api from "../src/api";
export default class About extends Component {
  static async getInitialProps(context) {
    const articles = _.sampleSize(await api.getArticles(), 5);
    const categories = await api.getCategories();
    return { articles, categories };
  }
  render() {
    const { articles } = this.props;
    return (
      <Layout
        articles={articles}
        products={this.props.products}
        categories={this.props.categories}
      >
        <Head>
          <title>چلیپا کابل پویا - درباره ما</title>
        </Head>
        <div className="my-5 py-5 post-body rtl text-right p-5">
          <Row>
            <Col sm={12} md={6} className="d-flex align-items-center">
              <img
                src={`/static/images/about.jpg`}
                alt="chalipa about"
                width="100%"
                className="rounded shadow-lg"
              />
            </Col>
            <Col sm={12} md={6}>
              <h1 className="news-title pr-3 my-5">درباره چلیپا کابل پویا</h1>
              <p className="text-muted">
                شرکت چلیپا کابل پویا با بهره گیری از سالها تجربه در صنعت کابل ,
                یکی از تامین کنندگان سیم و کابل است که با وجود کارشناسان با
                تجربه و مدیریت منسجم و منظم این شرکت را به یک مجموعه معتبر و
                شناخته شده در پروژه های نفتی , فولادی , پالایشگاهی , ساختمانی
                و.. تبدیل نموده است چلیپا یکی از با سابقه ترین شرکتهای مهندسی
                بازرگانی است که در حال حاضر نمایندگی رسمی کابل متال و صنعتی
                الکتریک خراسان را دارا می باشد این شرکت با سابقه درخشان در تامین
                انواع سیم و کابلهای فشار ضعیف و فشار متوسط و نیز کابلهای افشان ,
                کابلهای ابزار دقیق , کابلهای مقاوم در برابر حرارت و کابلهای خاص
                و ...می باشد ما با شناسایی فرصتهای جدید , محصولات متنوع و با
                کیفیت تامین کرده تا منحصر به فرد بودنمان را حفظ کنیم
              </p>
              <p className="text-muted">
                چطور توانایی های ما نتایج مثبتی برای شما به ارمغان داشته ؟ ما
                طیف گسترده ای از کابلهای مسی و آلومینیومی با کیفیت بالا ارائه
                میکنیم
              </p>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}
