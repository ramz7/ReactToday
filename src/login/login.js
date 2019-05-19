import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <h2>Login</h2>
          User Name
          <Input
            placeholder="Ënter username"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          Password
          <Input
            placeholder="Ënter password"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ width: "500px", margin: "10px", padding: "8px" }}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
export default Login;
