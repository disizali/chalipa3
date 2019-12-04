import Layout from "../components/Layout";
import { Table, Container } from "reactstrap";
import Head from "next/head";

import * as api from "../src/api";
export default class Prices extends React.Component {
  static async getInitialProps() {
    let prices = await api.getPrices();
    return { prices };
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>چلیپا کابل پویا - قیمت سیم و کابل</title>
        </Head>
        <Container className="mt-5 text-right rtl">
          <h1 className="mb-3">قیمت سیم و کابل</h1>
          <Table className="table table-striped text-center table-light">
            <tbody>
              <tr>
                <th>#</th>
                <th>کد</th>
                <th>اندازه</th>
                <th>قیمت</th>
              </tr>
              {this.props.prices.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.code}</td>
                    <td>{item.size}</td>
                    <td>
                      {item.price > 0 ? (item.price.toLocaleString()) : "تماس بگیرید"}
                      <i className="fas fa-money-bill-alt mr-2"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </Layout>
    );
  }
}
