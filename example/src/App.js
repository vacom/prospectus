import React, { Component } from "react";

import Prospectus from "prospectus";

const LoginForm = {
  form: {
    action: "https://exemple.com",
    method: "post",
    target: "_blank"
  },
  elements: [
    {
      element: "text",
      props: {
        type: "email",
        id: "exampleInputEmail1",
        name: "exampleInputEmail1",
        label: "What's your email?",
        placeholder: "Enter email",
        groupClass: "form-group",
        className: "form-control",
        required: true
      }
    },
    {
      element: "text",
      props: {
        type: "password",
        id: "exampleInputPassword1",
        name: "exampleInputPassword1",
        placeholder: "Password",
        label: "Password",
        groupClass: "form-group",
        className: "form-control"
      }
    },
    {
      element: "checkbox",
      props: {
        type: "checkbox",
        id: "exampleCheck1",
        name: "exampleCheck1",
        placeholder: "Password",
        label: "Check me out",
        groupClass: "form-group form-check",
        className: "form-check-input"
      }
    },
    {
      element: "button",
      props: {
        id: "submit",
        type: "submit",
        label: "submit",
        className: "btn btn-primary"
      }
    }
  ]
};

const ContactForm = {
  form: {
    action: "https://example.com",
    method: "post",
    target: "_blank"
  },
  elements: [
    {
      element: "text",
      props: {
        type: "email",
        id: "exampleInputEmail1",
        name: "exampleInputEmail1",
        label: "What's your emaik?",
        placeholder: "Enter email",
        groupClass: "form-group",
        className: "form-control",
        required: true
      }
    },
    {
      element: "select",
      props: {
        id: "exampleFormControlSelect1",
        name: "exampleFormControlSelect1",
        label: "Example select",
        className: "form-control",
        groupClass: "form-group",
        data: ["1", "2", "3", "4", "5"]
      }
    },
    {
      element: "textarea",
      props: {
        id: "exampleFormControlTextarea1",
        name: "exampleFormControlTextarea1",
        label: "Message",
        placeholder: "Enter message",
        className: "form-control",
        groupClass: "form-group",
        rows: "3",
        cols: "50"
      }
    },
    {
      element: "button",
      props: {
        id: "submit",
        type: "submit",
        label: "submit",
        className: "btn btn-primary"
      }
    }
  ]
};

export default class App extends Component {
  state = {
    example: 1,
    showObject: false,
    showCode: false,
    code: null
  };
  onChangeFormHtml = html => {
    console.log(html);
    this.setState({
      code: html
    });
  };
  selectExample = e => {
    this.setState({
      example: e.target.value
    });
  };
  render() {
    const form = this.state.example == 1 ? LoginForm : ContactForm;
    return (
      <div>
        <div style={{ marginTop: "50px", marginLeft: "200px", width: "500px" }}>
          <h1>Prospectus Demo</h1>
          <p>
            This demo uses bootstrap for class styles, select a example to
            render the form from the object
          </p>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Select Example</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={this.selectExample}
            >
              <option value="1">Login Form</option>
              <option value="2">Contact Form</option>
            </select>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              this.setState({ showObject: !this.state.showObject })
            }
          >
            {this.state.showObject ? "Hide" : "Show"} Object
          </button>{" "}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => this.setState({ showCode: !this.state.showCode })}
          >
            {this.state.showCode ? "Hide" : "Show"} generated html code
          </button>
        </div>

        {this.state.showObject && (
          <div
            style={{
              width: "500px",
              marginLeft: "200px",
              marginTop: "50px",
              overflow: "auto",
              background: "#e9ecef"
            }}
          >
            {JSON.stringify(form)}
          </div>
        )}

        {this.state.showCode && (
          <div
            style={{
              width: "500px",
              marginLeft: "200px",
              marginTop: "50px",
              overflow: "auto",
              background: "#e9ecef"
            }}
          >
            {this.state.code}
          </div>
        )}

        <div style={{ width: "500px", marginLeft: "200px", marginTop: "50px" }}>
          <Prospectus
            data={form}
            renderToHTML={this.onChangeFormHtml}
            renderForm={true}
          />
        </div>
      </div>
    );
  }
}
