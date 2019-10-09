import Layout from "../../components/Layout";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
const News = props => {
  console.log(props);
  return (
    <Layout>
      <Container className="my-4 py-5 rtl text-right">
        <Row>
          <Col sm={12} md={4}>
            <img
              src={`/static/uploads/images/${props.news.image}`}
              className="w-100"
            />
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
  const host =
    context.req != undefined
      ? `http://${context.req.headers.host}`
      : `${window.location.origin}`;

  const { data: news } = await axios.get(`${host}/api/news/${id}`);
  return { news };
};

export default News;
