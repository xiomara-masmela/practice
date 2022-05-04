import React, { Component} from 'react';
import { Form, Label, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Field extends Component {
  
    render() {
      const {name, type,placeholder, value, onChangeValue, errorMessage} = this.props;
      return (
          <>
            <Form.Control className={this.props.errorClass}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChangeValue} 

            />
          </>
      );
    }
  }

  export default Field;