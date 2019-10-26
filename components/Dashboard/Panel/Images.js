import React, { Component } from "react";
import {
  Container,
  Table,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import axios from "axios";

export class Images extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedFile: "", images: [], loaded: 0 };
  }
  imageChangeHandler(e) {
    this.setState({ selectedFile: e.target.files[0] });
  }

  componentDidMount() {
    axios.get("http://95.216.86.208:3000/api/images").then(({ data: images }) => {
      this.setState({
        images
      });
    });
  }
  deleteImage(targetFileName) {
    axios
      .delete("http://95.216.86.208:3000/api/images", { data: { targetFileName } })
      .then(({ data }) => {
        this.setState({
          images: this.state.images.filter(item => item != targetFileName)
        });
      });
  }

  uploadImage() {
    const data = new FormData();
    data.append("image", this.state.selectedFile);
    axios.post("http://95.216.86.208:3001/api/upload", data).then(({ data }) => {
      const newImages = [data, ...this.state.images];
      this.setState({ images: newImages });
    });
  }
  render() {
    return (
      <div>
        <Container className="p-5 d-flex flex-column">
          <h2 className="text-light">مدیریت تصاویر</h2>
          <Form action="http://localhost:3001/api/upload" method="POST">
            <FormGroup>
              <Label
                className="text-secondary"
                htmlFor="exampleCustomFileBrowser"
              >
                آپلود تصویر
              </Label>
              <Input
                accept="image/x-png,image/gif,image/jpeg"
                type="file"
                className="panel-editor w-100"
                onChange={this.imageChangeHandler.bind(this)}
              />
              <Button
                className="form-control my-3"
                color="primary"
                onClick={this.uploadImage.bind(this)}
              >
                آپلود
              </Button>
            </FormGroup>
          </Form>
          <br />
          <hr />
          <br />
          <Table bordered responsive dark>
            <thead>
              <tr>
                <th width="20%">تصویر</th>
                <th width="60%">نام</th>
                <th width="20%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.images.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={`/static/uploads/images/${item}`}
                        alt={item.image}
                        width="100%"
                        className="rounded shadow"
                      />
                    </td>
                    <td className="ltr">{item}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => this.deleteImage(item)}
                      >
                        <i className="fas fa-trash mx-2"></i>
                        <span className="mx-2">حذف</span>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Images;
