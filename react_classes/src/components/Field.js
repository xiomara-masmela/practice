import React, { Component} from 'react';
import { Form, Label, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Field extends Component {
  
    render() {
      const { value , onChangeValue, type, placeholder } = this.props;
      return (
        <Form.Group className="mb-4">
            <Form.Control 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChangeValue} 
            />
        </Form.Group>
      );
    }
  }

  export default Field;