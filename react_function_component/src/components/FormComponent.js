import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from './Field';

function FormComponent() {

    const [formState, setFormState] = useState(
        {
            firstName: {
                value: '',
                type: 'text',
                name: 'firstName',
                placeholder: 'Name',
                hasError: false,
                errorMessage: '',
                validators: [
                    validateNotEmpty,
                ],
            },
            lastName: {
                value: '',
                type: 'text',
                name: 'lastName',
                placeholder: 'Last Name',
                hasError: false,
                errorMessage: '',
                validators: [
                    validateNotEmpty,
                ]
            },
            email: {
                value: '',
                type: 'email',
                name: 'email',
                placeholder: 'Email',
                hasError: false,
                errorMessage: '',
                validators: [
                    validateNotEmpty,
                    validateEmailFormat,
                ]
            },
            password: {
                value: '',
                type: 'text',
                name: 'password',
                placeholder: 'Password',
                hasError: false,
                errorMessage: '',
                validators: [
                    validateNotEmpty,
                    validateMinLength(8),
                ]
            },
            newPassword: {
                value: '',
                type: 'text',
                name: 'newPassword',
                placeholder: 'Confirm Password',
                hasError: false,
                errorMessage: '',
                validators: [
                    validateNotEmpty,
                    validateMinLength(5),
                ]
            }
        }
    );

    const fields = Object.entries(formState);

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setFormState((previousState) => ({
            ...previousState,
            [fieldName]: {
                ...previousState[fieldName],
                value: fieldValue
            }
        }));
    }

    function validateNotEmpty(field) {
        if (field.value.length > 0) {
            return '';
        }

        return `${field.placeholder} cannot be empty`
    }

    // Currying: Like a function that returns another function
    const validateMinLength = (minLength) => (field) => {
        if (field.length > minLength) {
            return '';
        }

        return `${field.placeholder} must be at least ${minLength} characters long`;
    }

    function validateEmailFormat(field) {
        const pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (pattern.test(field.value)) {
            return '';
        }

        return `${field.placeholder} does not look like a valid email`;
    }

    function validateField(fieldName, field) {
        let validationResult = '';

        // loop through all validators
        for (const validator of field.validators) {
            validationResult = validator(field); //validateNotEmpty

            const validationFailed = validationResult.length > 0;
            if (validationFailed) {
                break; // stop validation as soon as a validator fails
            }
        }

        // same approach as handleChange but changing
        // hasError and errorMessage this time
        // Note the use of the setState overload that
        // accepts prevState. This ensures we get the
        // latest state when using setState in a loop
        setFormState((previousState) => ({
            ...previousState,
            [fieldName]: {
                ...previousState[fieldName],
                hasError: validationResult.length > 0,
                errorMessage:  validationResult
            }
        }));
    }

    function handleClick(event) {
        event.preventDefault();
        for (const  [fieldName, field] of fields) {
            validateField(fieldName, field)
        }
    }

    return (
        <Form className="form bg-white px-5 rounded-2 shadow">
            {
                fields.map(([fieldName, field], i) => {
                    return (
                        <Field key={i}
                            name={fieldName}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={field.vlaue}
                            onChange={handleChange}
                            hasError={field.hasError}
                            errorMessage={field.errorMessage}
                        />
                    )
                })
            }
            <Button variant="primary" type="submit" className="btn btn-primary w-100 text-uppercase" onClick={handleClick}>
                Claim your free trial
        </Button>
            <p className="small text-center text-grey mt-3">By clicking the button, you are agreeing to our <a className="text-red" href="#">Terms and Services</a></p>
        </Form>
    )
}

export default FormComponent;
