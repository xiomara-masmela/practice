import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from './Field';

class RadioGroup extends Component {

    render() {
        const { name, options, value, onChange } = this.props;

        return (
            <div >
                {
                    options.map((option) => {
                        if (option.label === 'Custom') {
                            return (
                                <Field
                                    // className={hasError ? "error" : ""}
                                    name={name}
                                    type="number"
                                    placeholder={option.label}
                                    value={value}
                                    onChange={onChange}
                                />
                            )
                        } else {
                            const isChecked = option.value === value.value;
                            return (
                                <Form.Check key={option.label}
                                    type='radio'
                                    value={option.value}
                                    label={option.label}
                                    checked={isChecked}
                                    onChange={() => {
                                        onChange({
                                            preventDefault: () => { },
                                            target: {
                                                name,
                                                value: option,
                                            }
                                        })
                                    }}
                                    name={name}
                                />
                            )
                        }
                    })
                }
            </div>
        );
    }
}

export default RadioGroup;