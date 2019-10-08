import Layout from "../../components/Layout";
import { Container, Row, Col } from "reactstrap";

const News = props => {
  return (
    <Layout>
      <Container className="my-4 py-5 rtl text-right">
        <Row>
          <Col sm={12} md={4}>
            <img src={props.news.image} className="w-100" />
          </Col>
          <Col sm={12} md={8}>
            <h1>{props.news.title}</h1>
            <div
              className="content post-body"
              dangerouslySetInnerHTML={{ __html: props.news.body }}
            ></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

News.getInitialProps = async context => {
  const id = context.query.id;
  const news = require("../../static/data/news.json");
  return { news: news.find(item => item.id == id) };
};

export default News;
