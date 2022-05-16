import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class RadioGroup extends Component {

    render() {
        const { name, type, label, value, onChangeValue, hasError, errorMessage } = this.props;
        return (
            <>  
                <Form.Check
                    type={type}
                    value={value}
                    label={label}
                />
            </>
        );
    }
}

export default RadioGroup;