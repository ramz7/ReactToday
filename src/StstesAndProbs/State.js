import React, { Component } from "react";
import { Button } from "@material-ui/core";

class State extends Component {
  constructor() {
    super();
    //this.changeName = this.changeName.bind(this);
    this.state = {
      person: { name: "", city: "" }
    };
  }

  componentDidMount() {
    this.setState({
      person: { name: "Rammi", city: "Jaffna" }
    });
  }

  componentDidUpdate() {
    console.log("components has been updated", this.state);
    console.table(this.state);
  }

  render() {
    return (
      <div>
        <p>Name : {this.state.person.name}</p>
        <p>City : {this.state.person.city}</p>
      </div>
    );
  }
}
export default State;
