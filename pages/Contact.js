import React from "react";
import Layout from "../components/Layout";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false
    };
    this.sendMessage.bind(this);
  }

  async sendMessage() {
    const [nameInput, name] = [
      document.getElementById("name"),
      document.getElementById("name").value
    ];
    const [emailInput, email] = [
      document.getElementById("email"),
      document.getElementById("email").value
    ];
    const [numberInput, number] = [
      document.getElementById("number"),
      document.getElementById("number").value
    ];
    const [messageInput, message] = [
      document.getElementById("message"),
      document.getElementById("message").value
    ];
    // const response = await axios.post("http://localhost:3000/api/contact", {
    //   name,
    //   email,
    //   number,
    //   message
    // });
    if (response.data == "done") {
      alert("با تشکر از شما ، پیام با موفقیت ارسال شد");
    }
    nameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
    messageInput.value = "";
  }
  render() {
    return (
      <Layout>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=chalipa%20cable%20pouya&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
          <style jsx>
            {`
              .mapouter {
                position: relative;
                text-align: right;
                height: 300px;
                width: 100%;
              }
              .gmap_canvas {
                overflow: hidden;
                background: none !important;
                height: 300px;
                width: 100%;
              }
            `}
          </style>
        </div>
        <Container className="my-5 text-right rtl">
          <Row>
            <Col>
              <FormGroup>
                <Label for="name">نام</Label>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="نام خود را وارد کنید"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">ایمیل</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </FormGroup>
              <FormGroup>
                <Label for="number">شماره تماس</Label>
                <Input
                  type="phone number"
                  name="phone number"
                  id="number"
                  placeholder="شماره خود را وارد کنید"
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">متن پیام شما</Label>
                <Input type="textarea" name="message" id="message" />
              </FormGroup>
              <Button onClick={this.sendMessage} color="primary">
                ارسال
              </Button>
              {/* </Form> */}
            </Col>
            <Col className="d-flex align-items-start flex-column text-right">
              <h1 className="news-title pr-3">تماس با چلیپا کابل پویا</h1>

              <p>دفتر مرکزی چلیپا کابل پویا</p>
              <p>
                تهران خیابان شهید بهشتی , بین خیابان سهروردی و میدان تختی -بعد
                ازخیابان کاووسی فر , پلاک 202 , طبقه دوم-واحد 3
              </p>
              <p> تلفن : 5-88525503-021</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
