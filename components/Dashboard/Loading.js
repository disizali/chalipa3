import React, { Component } from "react";
export class Loading extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="w-100 h-100 d-flex align-items-center justify-content-center">
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      </div>
    );
  }
}

export default Loading;
