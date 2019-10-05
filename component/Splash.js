import React from "react";
export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "/static/images/splash-1.jpg"
    };
  }
  render() {
    return (
      <section className="splash h-50">
        <img src={this.state.image} className="slider" width="100%" />
        <button className="splash-changer changer-1">&lt;</button>
        <button className="splash-changer changer-2">&gt;</button>
      </section>
    );
  }
}
