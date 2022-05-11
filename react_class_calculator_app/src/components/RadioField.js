import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class RadioField extends Component {

    render() {
        const { name, type, label, value, onChangeValue, hasError, errorMessage } = this.props;
        return (
            <>  
                <Form.Check
                    type={type}
                    value={value}
                    label={label}
                />
                {hasError &&
                    <div className="error-div">{errorMessage}</div>
                }
            </>
        );
    }
}

export default RadioField;