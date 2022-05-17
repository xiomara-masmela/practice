import { Form, Group, Label, Control, Text, Button, InputGroup, Checkbox, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Field from './Field';
import RadioGroup from './RadioGroup';


class FormComponent extends Component {
    
    render() {
        const {fields} = this.props;
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
                <RadioGroup name={fields.tipValue.name} options={fields.tipValue.options} onChange={fields.tipValue.onChange} value={fields.tipValue.value} />
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
export default FormComponent;