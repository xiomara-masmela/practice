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
                                <div className="radioInput custom" key={option.label}>
                                    <Field
                                        // className={hasError ? "error" : ""}
                                        name={name}
                                        type="number"
                                        placeholder={option.label}
                                        value={value.label === 'Custom' ? value.value * 100 : ""}
                                        onChange={(e) => {
                                            onChange({
                                                preventDefault: () => { },
                                                target: {
                                                    name,
                                                    value: {
                                                        label: 'Custom',
                                                        value: Number(e.target.value) / 100,
                                                        
                                                    },
                                                }
                                            })
                                        }}
                                    />
                                </div>
                            )
                        } else {

                            const isChecked = option.value === value.value;
                            console.log(option.value === value.value)
                            
                            return (
                                <div className="radioInput" key={option.label}>
                                    <Radio key={option.label}
                                        value={option.value}
                                        checked={isChecked}
                                        onChange={() => {
                                            onChange({
                                                preventDefault: () => { },
                                                target: {
                                                    name,
                                                    value: option,
                                                    checked: {isChecked}
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