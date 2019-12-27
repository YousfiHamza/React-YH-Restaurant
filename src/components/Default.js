import React, { Component } from "react";
import Title from "./Title";
import camels from "../camels.png";

export default class Default extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <Title title=" Erreur #404 " />
            <img
              src={camels}
              alt="Camels Traveling"
              style={{ width: "70vw" }}
            />
            <Title title={this.props.location.pathname} />
            <Title title=" Est une Page Introuvable !" />
          </div>
        </div>
      </div>
    );
  }
}
