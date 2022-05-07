import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Field extends Component {

  render() {
    const { name, type, placeholder, value, onChangeValue, hasError, errorMessage } = this.props;
    return (
      <>
        <Form.Control
          className={hasError ? "error" : ""}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChangeValue}
        />
        {hasError &&
          <div className="error-div">{errorMessage}</div>
        }
      </>
    );
  }
}

export default Field;
