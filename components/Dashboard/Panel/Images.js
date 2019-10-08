import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";

export class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  uploadImage() {
    axios.post("http://localhost:3000/api/upload").then(({ data }) => {
      console.log(data);
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.uploadImage.bind(this)}>UPLOAD</Button>
      </div>
    );
  }
}

export default Images;
