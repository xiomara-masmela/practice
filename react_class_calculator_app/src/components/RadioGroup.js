import React, { Component } from 'react';
import {
    Radio,
} from '@chakra-ui/react';
import Field from './Field';
import "../App.css";

class RadioGroup extends Component {
    render() {
        const { name, options, value, onChange } = this.props;
        return (
            <div className="tipContainer" >
                {
                    options.map((option) => {
                        if (option.label === 'Custom') {
                            return (
                                <div className="radioInput custom">
                                    <Field
                                        // className={hasError ? "error" : ""}
                                        name={name}
                                        type="number"
                                        placeholder={option.label}
                                        value={value}
                                        onChange={onChange}
                                    />
                                </div>
                            )
                        } else {
                            const isChecked = option.value === value.value;
                            return (
                                <div className="radioInput">
                                    <Radio key={option.label}
                                        value={option.value}
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
                                    >
                                        {option.label}
                                    </Radio>
                                </div>
                            )
                        }
                    })
                }
            </div>
        );
    }
}

export default RadioGroup;