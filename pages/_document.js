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
          <html lang="fa">
            <meta charset="UTF-8" />
            <meta
              name="keywords"
              content="کابل افشار نژاد خراسان,کابل متال,کابل شاهین,قیمت سیم و کابل,نمایندگی کابل خراسان,نمایندگی کابل شاهین,کابل فشار ضعیف,کابل ابزار دقیق,کابل افشان,کابل فشار قوی"
            />
            <meta
              name="description"
              content="شرکت چلیپا کابل پویا با بهره گیری از سالها تجربه در صنعت کابل طیف گسترده ای از کابلهای مسی و آلومینیومی با کیفیت بالا ارائه میکند"
            ></meta>
            <link rel="icon" type="image/png" href="/static/images/logo.png" />
            <title>چلیپا کابل پویا</title>
          </html>
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
