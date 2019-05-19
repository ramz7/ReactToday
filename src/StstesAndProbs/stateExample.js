import React, { Component } from "react";
import { Button } from "@material-ui/core";

class State extends Component {
  constructor() {
    super();
    //this.changeName = this.changeName.bind(this);
    this.state = { name: "Äbi" };
  }

  changeName() {
    this.setState({ name: "Rammi" });
  }

  render() {
    return (
      <div>
        <h1> {this.state.name}</h1>
        <h1> {this.state.mail}</h1>
        <h1> {this.state.age}</h1>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "500px", margin: "10px", padding: "8px" }}
          onClick={this.changeName.bind(this)}
        >
          Submit
        </Button>
      </div>
    );
  }
}
export default State;
