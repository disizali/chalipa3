import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="fa">
        <Head>
         

          <meta charSet="UTF-8" />
          <meta
            name="keywords"
            content="کابل افشار نژاد خراسان,کابل متال,کابل شاهین,قیمت سیم و کابل,نمایندگی کابل خراسان,نمایندگی کابل شاهین,کابل فشار ضعیف,کابل ابزار دقیق,کابل افشان,کابل فشار قوی"
          />
          <meta
            name="description"
            content="شرکت چلیپا کابل پویا با بهره گیری از سالها تجربه در صنعت کابل طیف گسترده ای از کابلهای مسی و آلومینیومی با کیفیت بالا ارائه میکند"
          ></meta>
          <meta
            name="google-site-verification"
            content="XH0xV47B0RHTBquHv11ZAkF3dkdzT0CGu_7e5m3T0K4"
          />
          <link rel="icon" type="image/png" href="/static/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
