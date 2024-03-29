import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Field from './Field';
import RadioGroup from './RadioGroup';
import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'


class FormComponent extends Component {
    render() {
        const { fields } = this.props;
        return (
            <FormControl mr="25px" >
                <Field
                    name={fields.billTotal.name}
                    label={fields.billTotal.label}
                    type={fields.billTotal.type}
                    placeholder={fields.billTotal.placeholder}
                    value={fields.billTotal.value}
                    onChange={fields.billTotal.onChange}
                />
                <FormLabel fontSize="12px" fontWeight="700">Select tip %</FormLabel>
                <RadioGroup name={fields.tipValue.name} options={fields.tipValue.options} onChange={fields.tipValue.onChange} value={fields.tipValue.value} />

                <Field
                    name={fields.numberPeople.name}
                    label={fields.numberPeople.label}
                    type={fields.numberPeople.type}
                    placeholder={fields.numberPeople.placeholder}
                    value={fields.numberPeople.value}
                    onChange={fields.numberPeople.onChange}
                />
            </FormControl>
        );
    }
}
export default FormComponent;