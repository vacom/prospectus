import React from "react";
import PropTypes from "prop-types";

const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  // eslint-disable-next-line
  return s4() + "" + s4() + "" + s4() + "" + s4();
};

const Text = item => {
  const { label, name } = item;
  if (label) {
    return (
      <div key={guid()}>
        <label htmlFor={name}>{label}</label>
        <input {...item} />
      </div>
    );
  } else {
    return <input key={guid()} {...item} />;
  }
};

Text.propTypes = {
  item: PropTypes.object.isRequired
};

const Textarea = item => {
  const { label, name } = item;
  if (label) {
    return (
      <div key={guid()}>
        <label htmlFor={name}>{label}</label>
        <textarea {...item} />
      </div>
    );
  } else {
    return <textarea key={guid()} {...item} />;
  }
};

Textarea.propTypes = {
  item: PropTypes.object.isRequired
};

const Radio = ({ label, name, data, type, ...rest }) => {
  return (
    <div key={guid()}>
      {label && <label htmlFor={name}>{label}</label>}
      {data.map(value => {
        return (
          <label key={value}>
            <input
              type={type}
              name={name}
              id={`${name}-${value}`}
              value={value}
              {...rest}
            />{" "}
            {value}
          </label>
        );
      })}
    </div>
  );
};
Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

const Select = ({ data, ...rest }) => {
  const { label, name } = rest;
  return (
    <div key={guid()}>
      {label && <label htmlFor={name}>{label}</label>}
      <select {...rest}>
        {data.map(value => {
          return <option key={value}>{value}</option>;
        })}
      </select>
    </div>
  );
};

Select.propTypes = {
  data: PropTypes.array.isRequired
};

const Button = ({ label, ...rest }) => {
  return (
    <button key={guid()} {...rest}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired
};

const RenderElements = elements => {
  const data = [];
  elements.map(item => {
    switch (item.element) {
      case "text":
        data.push(Text(item.props));
        break;
      case "radio":
        data.push(Radio(item.props));
        break;
      case "select":
        data.push(Select(item.props));
        break;
      case "textarea":
        data.push(Textarea(item.props));
        break;
      case "button":
        data.push(Button(item.props));
        break;
      default:
        data.push(Text(item.props));
    }
  });
  return data;
};

export default RenderElements;
