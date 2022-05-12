import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from './Field';


class FormComponent extends Component {
    constructor(props) {
        super(props);

        // binding funcions before declaring state because
        // validateNotEmpty and validateEmailFormat are
        // passed to state
        this.validateNotEmpty = this.validateNotEmpty.bind(this);
        this.validateEmailFormat = this.validateEmailFormat.bind(this);
        this.validateField = this.validateField.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            fields: {
                firstName: {
                    type: 'text',
                    placeholder: 'First Name',
                    value: '',
                    hasError: false,
                    errorMessage: '',
                    validators: [
                        this.validateNotEmpty,
                    ]
                },
                lastName: {
                    type: 'text',
                    placeholder: 'Last Name',
                    value: '',
                    hasError: false,
                    errorMessage: '',
                    validators: [
                        this.validateNotEmpty,
                    ]
                },
                email: {
                    type: 'email',
                    placeholder: 'Email',
                    value: '',
                    hasError: false,
                    errorMessage: '',
                    validators: [
                        this.validateNotEmpty,
                        this.validateEmailFormat,
                    ]
                },
                password: {
                    type: 'text',
                    placeholder: 'Password',
                    value: '',
                    hasError: false,
                    errorMessage: '',
                    validators: [
                        this.validateNotEmpty,
                    ]
                },
            }
        };
    }

    handleChange(event) {
        // Fields 2 levels deep just to demonstrate how to destructure
        // when you want to only change parts of the tree
        this.setState({
            ...this.state,
            fields: {
                ...this.state.fields,
                [event.target.name]:  {
                    ...this.state.fields[event.target.name],
                    value: event.target.value,
                }
            }
        });
    }

    validateNotEmpty(field) {
        if (field.value.length > 0) {
            return '';
        }

        return `${field.placeholder} cannot be empty`
    }

    validateEmailFormat(field) {
        const pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (pattern.test(field.value)) {
            return '';
        }

        return `${field.placeholder} does not look like a valid email`;
    }

    validateField(fieldName, field) {
        let validationResult = '';

        // loop through all validators
        for (const validator of field.validators) {
            validationResult = validator(field); //validateNotEmpty

            const validationFailed = validationResult.length > 0;
            if (validationFailed) {
                break; // stop validation as soon as a validator fails
            }
        }

        // const validationResult = field.validation.reduce((accu, validation) => {
        //     // return the validation error returned by either validateNotEmpty or validateEmailFormat.
        //     // do not run further validations when one already failed
        //     if (accu.length > 0) {
        //         return accu;
        //     }

        //     // return the error message sent back by either
        //     // validateNotEmpty or validateEmailFormat
        //     return validation(field);
        // }, ''); // accumulator starts as an empty error message

        // same approach as handleChange but changing
        // hasError and errorMessage this time
        // Note the use of the setState overload that
        // accepts prevState. This ensures we get the
        // latest state when using setState in a loop
        this.setState((prevState) => ({
            ...prevState,
            fields: {
                ...prevState.fields,
                [fieldName]:  {
                    ...prevState.fields[fieldName],
                    hasError: validationResult.length > 0,
                    errorMessage: validationResult,
                }
            }
        }));
    }

    handleClick(event) {
        event.preventDefault();

        // using Object.entries to iterate through all keys and values of an object
        // for easy validation
        Object.entries(this.state.fields).forEach(([fieldName, field]) => {
            this.validateField(fieldName, field);
        })

        const objectArray = Object.entries(this.state.fields).map(([key, value]) => {
            return {
                ...value,
                name: key,
            };
        })
        console.log(objectArray);

        const reduceToConvertToObject = objectArray.reduce((accu, currentItem) => {
            console.log(accu);
            return {
                ...accu,
                [currentItem.name] : {
                    ...currentItem,
                },
            }
        }, {});
        console.log(reduceToConvertToObject);
    }

    render() {
        return (
            <Form className="form bg-white px-5 rounded-2 shadow">
                {
                // using Object.entries to iterate through all keys and values of an object
                // for easy form generation
                }
                {Object.entries(this.state.fields).map(([name, field]) => (
                    <Form.Group key={name} className="mb-4">
                        <Field className="mb-4"
                            name={name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChangeValue={this.handleChange}
                            hasError={field.hasError}
                            errorMessage={field.errorMessage}
                        />
                    </Form.Group>
                ))}
                <Button variant="primary" type="submit" className="btn btn-primary w-100 text-uppercase" onClick={this.handleClick.bind(this)}>
                    Claim your free trial
                </Button>
                <p className="small text-center text-grey mt-3">By clicking the button, you are agreeing to our <a className="text-red">Terms and Services</a></p>
            </Form>
        );
    }
}

export default FormComponent;
