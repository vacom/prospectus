import React, { Component } from "react";

export default class BigForm extends Component {
  render() {
    return (
      <form
        action="https://api.formette.com/vitoramaral/conversas"
        method="post"
        target="_blank"
        cf-form="true"
        style={{ marginTop: "200px" }}
      >
        <fieldset>
          <label for="name">What's your name?</label>
          <input
            required
            cf-questions="Hi there! What's your name? 😊"
            type="text"
            className="form-control"
            name="name"
            id="name"
          />
        </fieldset>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    );
  }
}
