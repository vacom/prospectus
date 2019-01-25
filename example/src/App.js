import React, { Component } from "react";

import Prospectus from "prospectus";

export default class App extends Component {
  state = {
    data: {
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
            label: "submit",
            className: "form-control"
          }
        }
      ]
    }
  };
  componentDidMount() {
    /*  setInterval(() => {
    this.setState({
        data: {
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
            }
          ]
        }
      });
    }, 5000);*/
  }
  getFormHtml = html => {
    console.log(html);
  };
  render() {
    return (
      <div>
        <Prospectus
          data={this.state.data}
          renderToHTML={this.getFormHtml}
          renderForm={true}
        />
      </div>
    );
  }
}
