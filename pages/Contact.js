import React from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Head from "next/head";

import {
  Container,
  Row,
  Col,
  Button,
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
    const response = await axios.post("http://95.216.86.208/api/contact", {
      name,
      email,
      number,
      message
    });
    if (response.data == "done") {
      alert("با تشکر از شما ، پیام با موفقیت ارسال شد");
    }
    nameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
    messageInput.value = "";
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <Layout>
        <Head>
          <title>چلیپا کابل پویا - تماس با ما</title>
        </Head>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8044614390956!2d51.43352431561295!3d35.73102723484614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03e3f181f7dd%3A0x5d1db83216503389!2z2LTYsdqp2Kog2obZhNuM2b7YpyDaqdin2KjZhCDZvtmI24zYpw!5e0!3m2!1sen!2s!4v1572419832060!5m2!1sen!2s"
              width="100%"
              height="300"
              frameborder="0"
              allowfullscreen=""
              className="shadow-sm border-bottom"
            ></iframe>
          </div>
        </div>
        <Container className="my-5 text-right rtl">
          <Row>
            <Col sm={12} md={6}>
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
            <Col
              sm={12}
              md={6}
              className="d-flex align-items-start flex-column text-right my-5"
            >
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
