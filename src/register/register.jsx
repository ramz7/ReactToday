import React, { Component } from "react";
import "./register.css";
class Register extends Component {
  render() {
    return (
      <div class="form-style-6">
        <h1>Registeration Form</h1>
        <form>
          <input type="text" name="field1" placeholder="Your First Name" />
          <input type="text" name="field1" placeholder="Your Last  Name" />
          <input type="text" name="field1" placeholder="Your Age" />
          <input type="email" name="field2" placeholder="Email Address" />
          <input type="email" name="field2" placeholder="Mobile No" />
          <textarea name="field3" placeholder="your Message" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Register;
