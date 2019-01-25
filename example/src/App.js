import React, { Component } from "react";

import Prospectus from "prospectus";

const Contact = {
  form: {
    action: "https://api.formette.com/vitoramaral/conversas",
    method: "post",
    target: "_blank"
  },
  elements: [
    {
      element: "text",
      props: {
        type: "text",
        id: "name",
        name: "name",
        label: "What's your name?",
        className: "form-control",
        required: true
      }
    },
    {
      element: "textarea",
      props: {
        id: "name",
        name: "name",
        label: "What's your name?",
        rows: "4",
        cols: "50"
      }
    },
    {
      element: "text",
      props: {
        type: "text",
        id: "company",
        name: "company",
        label: "Company",
        className: "form-control"
      }
    },
    {
      element: "radio",
      props: {
        type: "radio",
        id: "occupation",
        name: "occupation",
        label: "Occupation",
        className: "form-control",
        data: ["developer", "Devops"]
      }
    },
    {
      element: "select",
      props: {
        id: "opinion",
        name: "opinion",
        label: "conversational interfaces be everywhere?",
        className: "form-control",
        data: ["Definitely", "Maybe"]
      }
    },
    {
      element: "button",
      props: {
        id: "submit",
        type: "submit",
        name: "submit",
        label: "submit",
        className: "form-control"
      }
    }
  ]
};

export default class App extends Component {
  getFormHtml = html => {
    console.log(html);
  };
  render() {
    return (
      <div>
        <Prospectus
          data={Contact}
          renderToHTML={this.getFormHtml}
          renderForm={true}
        />
      </div>
    );
  }
}
