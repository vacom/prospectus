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
  const { label, groupClass, ...rest } = item;
  if (label) {
    return (
      <div className={groupClass} key={guid()}>
        <label htmlFor={rest.name}>{label}</label>
        <input {...rest} />
      </div>
    );
  } else {
    return <input key={guid()} {...rest} />;
  }
};

Text.propTypes = {
  item: PropTypes.object.isRequired
};

const Textarea = item => {
  const { label, groupClass, ...rest } = item;
  if (label) {
    return (
      <div className={groupClass} key={guid()}>
        <label htmlFor={rest.name}>{label}</label>
        <textarea {...rest} />
      </div>
    );
  } else {
    return <textarea key={guid()} {...rest} />;
  }
};

Textarea.propTypes = {
  item: PropTypes.object.isRequired
};

const Radio = ({ label, name, data, type, groupClass, ...rest }) => {
  return (
    <div className={groupClass} key={guid()}>
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
  groupClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

const Select = ({ data, ...rest }) => {
  const { label, groupClass, ...props } = rest;
  return (
    <div className={groupClass} key={guid()}>
      {label && <label htmlFor={props.name}>{label}</label>}
      <select {...props}>
        {data.map(value => {
          return <option key={value}>{value}</option>;
        })}
      </select>
    </div>
  );
};

Select.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

const Checkbox = item => {
  const { label, groupClass, ...rest } = item;
  if (label) {
    return (
      <div className={groupClass} key={guid()}>
        <input {...rest} />
        <label htmlFor={rest.name}>{label}</label>
      </div>
    );
  } else {
    return <input key={guid()} {...rest} />;
  }
};

Checkbox.propTypes = {
  item: PropTypes.object.isRequired
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
      case "checkbox":
        data.push(Checkbox(item.props));
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
