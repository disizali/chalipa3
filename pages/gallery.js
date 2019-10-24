import React from "react";
import Layout from "../components/Layout";
import { Row, Col } from "reactstrap";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
            console.log(item.toString().length);
            return (
              <Col
                sm={3}
                className="text-center d-flex align-items-center justify-content-center p-5"
                key={index}
              >
                <img
                  src={`https://picsum.photos/2${
                    item.toString().length == 1 ? `0${item}` : item
                  }`}
                  className="w-75 shadow rounded"
                />
              </Col>
            );
          })}
        </Row>
      </Layout>
    );
  }
}