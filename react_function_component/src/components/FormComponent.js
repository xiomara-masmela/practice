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
                errorMessage: ''
            },
            lastName: {
                value: '',
                type: 'text',
                name: 'lastName',
                placeholder: 'Last Name',
                hasError: false,
                errorMessage: ''
            },
            email: {
                value: '',
                type: 'email',
                name: 'email',
                placeholder: 'Email',
                hasError: false,
                errorMessage: ''
            },
            password: {
                value: '',
                type: 'text',
                name: 'password',
                placeholder: 'Password',
                hasError: false,
                errorMessage: ''
            }

        }
    );

    const fields = Object.entries(formState);


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
                            ...previousState[fieldName],
                            hasError: true,
                            errorMessage: validEmailErrorMessage
                        }
                    }));

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