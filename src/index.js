import React, { Component, Fragment } from "react";
import { renderToString } from "react-dom/server";
import PropTypes from "prop-types";

import Form from "./Form";

export default class Prospectus extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    renderForm: PropTypes.bool.isRequired,
    renderToHTML: PropTypes.func
  };
  componentDidMount() {
    this.props.renderToHTML(this.objectToHTML());
  }
  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.data) === JSON.stringify(this.props.data)) {
      return false;
    }
    //compare if they are different for optimize updates
    this.props.renderToHTML(this.objectToHTML());
  }
  objectToHTML = () => {
    return renderToString(<Form data={this.props.data} />);
  };
  render() {
    const { renderForm, data } = this.props;
    return <Fragment>{renderForm && <Form data={data} />}</Fragment>;
  }
}
