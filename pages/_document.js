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
          <script type="application/ld+json">
            {{
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "ACME",
              url: "http://www.chalipacable.ir",
              address:
                "آدرس: تهران-خیابان بهشتی ,بعد از خیابان کاووسی فر , پلاک 202 طبقه دوم",
              sameAs: [
                "https://www.facebook.com/chalipa.cable.9",
                "http://instagram.com/chalipacable.ir"
              ]
            }}
          </script>
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
