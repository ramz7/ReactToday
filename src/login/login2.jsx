import React, { Component } from "react";
import "./login.css";
class Register extends Component {
  render() {
    return (
      <div class="form-style-6">
        <h1>Login</h1>
        <form>
          <input type="text" name="field1" placeholder="User Name" />
          <input type="text" name="field1" placeholder="Password" />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Register;
