import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import RenderElements from "./Elements";

export default class Form extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const { form, elements } = this.props.data;
    return <form {...form}>{RenderElements(elements)}</form>;
  }
}
