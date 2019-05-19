import React, { Component } from "react";
import "./form.css";
class Form extends Component {
  render() {
    return (
      <div class="form-style-6">
        <h1>Contact Us</h1>
        <form>
          <input type="text" name="field1" placeholder="Your Name" />
          <input type="email" name="field2" placeholder="Email Address" />
          <textarea name="field3" placeholder="Type your Message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
export default Form;
