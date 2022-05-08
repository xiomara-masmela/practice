import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from './Field';

function FormComponent() {

    const [formState, setFormState] = useState(
        {
            firstName: {
                value: '',
                placeholder: 'Name',
                hasError: false,
                errorMessage: ''
            },
            lastName: {
                value: '',
                placeholder: 'Last Name',
                hasError: false,
                errorMessage: ''
            },
            email: {
                value: '',
                placeholder: 'Email',
                hasError: false,
                errorMessage: ''
            },
            password: {
                value: '',
                placeholder: 'Password',
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
                ...previousState[fieldName],
                value: fieldValue
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

    function validateField(fieldName, field) {
        if (field.value.length === 0) {
            setFormState((previousState) => ({
                ...previousState,
                [fieldName]: {
                    ...previousState[fieldName],
                    hasError: true,
                    errorMessage: `${field.placeholder} cannot be empty`
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

                } else {
                    setFormState((previousState) => ({
                        ...previousState,
                        [fieldName]: {
                            value: formState.email.value,
                            hasError: false,
                            errorMessage: ''
                        }
                    }));
                }

            } else {
                setFormState((previousState) => ({
                    ...previousState,
                    [fieldName]: {
                        ...previousState[fieldName],
                        hasError: false,
                        errorMessage: ''
                    }
                }));

            }
        }
    }


    function handleClick(event) {
        event.preventDefault();
        const fields = Object.entries(formState);
        for (const field of fields) {
            validateField(field[0], field[1])
        }
    }

    return (
        <Form className="form bg-white px-5 rounded-2 shadow">
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="firstName"
                    type="text"
                    placeholder={formState.firstName.placeholder}
                    value={formState.firstName.value}
                    onChange={handleChange}
                    errorClass={formState.firstName.hasError ? "error" : ""}
                    errorMessage={formState.firstName.hasError ? formState.firstName.errorMessage : ""}
                />
            </Form.Group>
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="lastName"
                    type="text"
                    placeholder={formState.lastName.placeholder}
                    value={formState.lastName.value}
                    onChange={handleChange}
                    errorClass={formState.lastName.hasError ? "error" : ""}
                    errorMessage={formState.lastName.hasError ? formState.lastName.errorMessage : ""}
                />

            </Form.Group>
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="email"
                    type="email"
                    placeholder={formState.email.placeholder}
                    value={formState.email.value}
                    onChange={handleChange}
                    errorClass={formState.email.hasError ? "error" : ""}
                    errorMessage={formState.email.hasError ? formState.email.errorMessage : ""}
                />

            </Form.Group>
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="password"
                    type="text"
                    placeholder={formState.password.placeholder}
                    value={formState.password.value}
                    onChange={handleChange}
                    errorClass={formState.password.hasError ? "error" : ""}
                    errorMessage={formState.password.hasError ? formState.password.errorMessage : ""}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-primary w-100 text-uppercase" onClick={handleClick}>
                Claim your free trial
        </Button>
            <p className="small text-center text-grey mt-3">By clicking the button, you are agreeing to our <a className="text-red" href="#">Terms and Services</a></p>
        </Form>
    )
}

export default FormComponent;