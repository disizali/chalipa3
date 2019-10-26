import Layout from "../components/Layout";
import { Table, Container } from "reactstrap";
import axios from "axios";
export default class Prices extends React.Component {
  static async getInitialProps() {
    const { data: prices } = await axios.get(
      "http://http://95.216.86.208:3000/api/prices"
    );
    return { prices };
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
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
                      {item.price.toLocaleString()}
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
