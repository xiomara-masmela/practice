import React, { Component, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from './Field';

function FormComponent() {

    const [formState, setFormState] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    );
    const [firstNameEmptyError, setFirstNameEmptyError] = useState("");
    const [lastNameEmptyError, setLastNameEmptyError] = useState("");
    const [emailEmptyError, setEmailEmptyError] = useState("");
    const [passwordEmptyError, setPasswordEmptyError] = useState("");
    const [emailNotValidError, setEmailNotValidError] = useState("");

    function handleChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setFormState((previousState) => ({
            ...previousState,
            [fieldName]: fieldValue
        }))
        console.log(formState)
    }

    function validateForm() {

        console.log("validatinnn")
        const firstNameErrorMessage = 'Name cannot be empty';
        const lastNameErrorMessage = 'Last name cannot be empty';
        const emailErrorMessage = 'Email cannot be empty';
        const passwordErrorMessage = 'Password cannot be empty';

        let index;

        if (formState.firstName.length === 0) {
            setFirstNameEmptyError(firstNameErrorMessage);
        } else {
            setFirstNameEmptyError("");
        }

        if (formState.lastName.length === 0) {
            setLastNameEmptyError(lastNameErrorMessage);
        } else {
            setLastNameEmptyError("")
        }

        if (formState.email.length === 0) {
            setEmailEmptyError(emailErrorMessage);
        } else {
            const pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!pattern.test(formState.email)) {
                setEmailNotValidError("Looks like this is not an email");
            } else {
                setEmailNotValidError("");
            }
            setEmailEmptyError("");

        }

        if (formState.password.length === 0) {
            setPasswordEmptyError(passwordErrorMessage);
        } else {
            setPasswordEmptyError("");

        }
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(formState);
        validateForm();
    }
    return (
        <Form className="form bg-white px-5 rounded-2 shadow">
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="firstName"
                    type="text"
                    placeholder="Name"
                    value={formState.firstName}
                    onChange={handleChange}
                />
                {firstNameEmptyError !== '' &&
                    <div className="error-div">{firstNameEmptyError} </div>
                }
            </Form.Group>
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formState.lastName}
                    onChange={handleChange}
                />
                {lastNameEmptyError !== '' &&
                    <div className="error-div">{lastNameEmptyError} </div>
                }
            </Form.Group>
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                />
                {emailEmptyError !== '' &&
                    <div className="error-div">{emailEmptyError} </div>
                }
                {
                    emailNotValidError !== '' &&
                    <div className="error-div">{emailNotValidError} </div>
                }
            </Form.Group>
            <Form.Group className="mb-4">
                <Field className="mb-4"
                    name="password"
                    type="text"
                    placeholder="Password"
                    value={formState.password}
                    onChange={handleChange}
                />
                {passwordEmptyError !== '' &&
                    <div className="error-div">{passwordEmptyError} </div>
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