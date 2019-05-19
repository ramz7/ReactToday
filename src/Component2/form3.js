import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";

class FormMaterial extends Component {
  render() {
    return (
      <div align="center">
        <h2>This is material form</h2>
        <Input
          placeholder="Enter your name"
          style={{ width: "500px", margin: "10px" }}
        />
        <br />
        <Input
          placeholder="Enter your age"
          style={{ width: "500px", margin: "10px" }}
        />
        <br />
        <Input
          placeholder="Enter your email"
          style={{ width: "500px", margin: "10px" }}
        />
        <br />
        <Input
          placeholder="Enter your mobile"
          style={{ width: "500px", margin: "10px" }}
        />
      </div>
    );
  }
}
export default FormMaterial;
