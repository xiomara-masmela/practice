import { Form, Group, Label, Control, Text, Button, InputGroup, Checkbox, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Field from './Field';
import RadioField from './RadioField';


class InputData extends Component {
    
    render() {
        const {fields} = this.props;
        console.log(fields);
        return (
            <Form>
                <Field
                    name={fields.billTotal.name}
                    label={fields.billTotal.label}
                    type={fields.billTotal.type}
                    placeholder={fields.billTotal.placeholder}
                    value={fields.billTotal.value}
                    onChange={fields.billTotal.onChange}
                />
                <Form.Label>Select tip %</Form.Label>
                 {
                     Object.entries(fields.tipValue).map(([name, field]) => (
                         <RadioField key={name}
                            type={field.type}
                            value={field.value}
                            checked={field.checked}
                            label={field.label}
                            onChange={field.onChange}
                         />
                         
                     ))
                 }
                <Field
                    name={fields.numberPeople.name}
                    label={fields.numberPeople.label}
                    type={fields.numberPeople.type}
                    placeholder={fields.numberPeople.placeholder}
                    value={fields.numberPeople.value}
                    onChange={fields.numberPeople.onChange}
                />
            </Form>
        );
    }
}
export default InputData;