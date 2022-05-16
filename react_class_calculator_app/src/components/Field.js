import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Field extends Component {

  render() {
    const { name, label, type, placeholder, value, onChange, hasError, errorMessage } = this.props;
    return (
      <>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          className={hasError ? "error" : ""}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {hasError &&
          <div className="error-div">{errorMessage}</div>
        }
      </>
    );
  }
}

export default Field;