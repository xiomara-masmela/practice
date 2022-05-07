import React, { Component, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from './Field';

function FormComponent() {

    const [formState, setFormState] = useState(
        {
            firstName: {
                value: '',
                hasError: false,
                errorMessage: ''
            },
            lastName: {
                value: '',
                hasError: false,
                errorMessage: ''
            },
            email: {
                value: '',
                hasError: false,
                errorMessage: ''
            },
            password: {
                value: '',
                hasError: false,
                errorMessage: ''
            }

        }
    );

    function handleChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setFormState((previousState) => ({
            ...previousState,
            [fieldName]: {
                value: fieldValue,
                hasError: false,
                errorMessage: ''
            }
        }));
    }

    function validEmailErrorMessageText(email) {
        let error;
        const pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!pattern.test(email)) {
            error = "Looks like this is not an email";
        }
        return error;
    }

    function emptyErrorMessageText(fieldName) {
        let error;
        switch (fieldName) {
            case 'firstName':
                error = 'Name cannot be empty';
                break;
            case 'lastName':
                error = 'Last Name cannot be empty';
                break;
            case 'email':
                error = 'Email cannot be empty';
                break;
            default:
                error = 'Password cannot be empty';
        }

        return error;
    }

    function validateField(fieldName, field) {
        const emptyErrorMessage = emptyErrorMessageText(fieldName);

        if (field.value.length === 0) {
            setFormState((previousState) => ({
                ...previousState,
                [fieldName]: {
                    value: '',
                    hasError: true,
                    errorMessage: emptyErrorMessage
                }
            }));

        } else {
            if (fieldName === 'email') {
                const validEmailErrorMessage = validEmailErrorMessageText(field.value);
                if (validEmailErrorMessage) {
                    setFormState((previousState) => ({
                        ...previousState,
                        [fieldName]: {
                            value: formState.email.value,
                            hasError: true,
                            errorMessage: validEmailErrorMessage
                        }
                    }));

                }

            }
        }
    }


    function handleClick(event) {
        event.preventDefault();

        const firstName = formState.firstName;
        const lastName = formState.lastName;
        const email = formState.email;
        const password = formState.password;

        validateField('firstName', firstName);
        validateField('lastName', lastName);
        validateField('email', email);
        validateField('password', password);
    }

    return (
        <Form className="form bg-white px-5 rounded-2 shadow">
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="firstName"
                    type="text"
                    placeholder="Name"
                    value={formState.firstName.value}
                    onChange={handleChange}
                    errorClass={formState.firstName.hasError ? "error" : ""}
                />
                {formState.firstName.hasError &&
                    <div className="error-div">{formState.firstName.errorMessage} </div>
                }
            </Form.Group>
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formState.lastName.value}
                    onChange={handleChange}
                    errorClass={formState.lastName.hasError ? "error" : ""}
                />
                {formState.lastName.hasError &&
                    <div className="error-div">{formState.lastName.errorMessage} </div>
                }
            </Form.Group>
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formState.email.value}
                    onChange={handleChange}
                    errorClass={formState.email.hasError ? "error" : ""}
                />
                {formState.email.hasError &&
                    <div className="error-div">{formState.email.errorMessage} </div>
                }
            </Form.Group>
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="password"
                    type="text"
                    placeholder="Password"
                    value={formState.password.value}
                    onChange={handleChange}
                    errorClass={formState.password.hasError ? "error" : ""}
                />
                {formState.password.hasError &&
                    <div className="error-div">{formState.password.errorMessage} </div>
                }
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-primary w-100 text-uppercase" onClick={handleClick}>
                Claim your free trial
        </Button>
            <p className="small text-center text-grey mt-3">By clicking the button, you are agreeing to our <a className="text-red">Terms and Services</a></p>
        </Form>
    )
}

export default FormComponent;