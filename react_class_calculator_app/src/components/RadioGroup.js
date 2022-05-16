import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class RadioGroup extends Component {

    render() {
        const { name, options, onChange } = this.props;
        return (
            <div >
                {
                    options.map((option) => (
                        <Form.Check key={option.label}
                            type='radio'
                            value={option.value}
                            label={option.label}
                            checked={option.checked}
                            onChange={onChange}
                            name={name}
                        />
                    ))
                }

            </div>
        );
    }
}

export default RadioGroup;