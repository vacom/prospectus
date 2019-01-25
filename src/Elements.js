import React from "react";

const Text = item => {
  const { label, name } = item;
  if (label) {
    return (
      <fieldset key={name}>
        <label htmlFor={name}>{label}</label>
        <input {...item} />
      </fieldset>
    );
  } else {
    return <input key={name} {...item} />;
  }
};

const Textarea = item => {
  const { label, name } = item;
  if (label) {
    return (
      <fieldset key={name}>
        <label htmlFor={name}>{label}</label>
        <textarea {...item} />
      </fieldset>
    );
  } else {
    return <textarea key={name} {...item} />;
  }
};

const Radio = ({ label, name, data, type, ...rest }) => {
  return (
    <fieldset>
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
    </fieldset>
  );
};

const Select = ({ data, ...rest }) => {
  const { label, name } = rest;
  return (
    <fieldset>
      {label && <label htmlFor={name}>{label}</label>}
      <select {...rest}>
        {data.map(value => {
          return <option key={value}>{value}</option>;
        })}
      </select>
    </fieldset>
  );
};

const Button = ({ label, ...rest }) => {
  return <button {...rest}>{label}</button>;
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
