import { Form, Group, Label, Control, Text, Button, InputGroup, Checkbox, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


class InputData extends Component {

    constructor(props) {
        super(props);

        // binding funcions before declaring state because
        // validateNotEmpty and validateEmailFormat are
        // passed to state
        // this.validateNotZero = this.validateNotZero.bind(this);
        // this.validateEmailFormat = this.validateEmailFormat.bind(this);
        // this.validateField = this.validateField.bind(this);
        // this.handleChange = this.handleChange.bind(this);

        this.state = {
            fields: {
                billTotal: {
                    value: '',
                    name: 'billTotal',
                    type: 'number',
                    label: 'Bill',
                    placeholder: '0',
                    hasError: false,
                    errorMessage: '',
                    validation: [
                        // this.validateNotZero,
                    ]
                },
                tipValue: {
                    value: ['5%', '10%', '15%', '25%', '50%', 'custom'],
                    name: 'tipValue',
                    type: 'radio',
                    label: 'Select Tip %',
                    checked: false,
                    hasError: false,
                    errorMessage: '',
                    validation: []
                },
                numberPeople: {
                    value: '',
                    name: 'numberPeople',
                    type: 'number',
                    label: 'Number of People',
                    placeholder: '0',
                    hasError: false,
                    errorMessage: '',
                    validation: [
                        // this.validateNotZero,
                    ]
                }

            }
        };
    }
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Bill</Form.Label>
                    <Form.Control type="number" placeholder="0" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {
                        this.state.fields.tipValue.value.map(([value]) => (
                            <Form.Check key={value}
                                type="radio"
                                value={value}
                                label={value}
                            />
                        ))
                    }
                    
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
        </Button>
            </Form>


        );
    }
}
export default InputData;