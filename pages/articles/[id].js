import Layout from "../../components/Layout";
import { Container } from "reactstrap";
import axios from "axios";

const Article = props => {
  return (
    <Layout>
      <Container className="my-5 py-5 rtl text-right">
        <h1>{props.article.title}</h1>
        <div className="post-body py-5 my-5">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: props.article.body }}
          ></div>
        </div>
      </Container>
    </Layout>
  );
};
Article.getInitialProps = async context => {
  const id = context.query.id;
  const host =
    context.req != undefined
      ? `http://${context.req.headers.host}`
      : `${window.location.origin}`;

  const { data: article } = await axios.get(`${host}/api/articles/${id}`);
  return { article };
};
export default Article;
