import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from './Field';


class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            type: props.type,
            placeholder: props.placeholder,
            firstNameErrorMessage: '',
            lastNameErrorMessage: '',
            emailErrorMessage: '',
            passwordErrorMessage: ''

        };
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeFirstName(event) {
        this.setState({ firstName: event.target.value })
    }

    handleChangeLastName(event) {
        this.setState({
            lastName: event.target.value
        }
        );
    }

    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        }
        );
    }

    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        }
        );
    }

    validateInput(firstName, lastName, email, password) {
        if (firstName.length === 0) {
            this.setState({
                firstNameErrorMessage: 'Name cannot be empty'
            })
        } else {
            this.setState({
                firstNameErrorMessage: ''
            })
        }

        if (lastName.length === 0) {
            this.setState({
                lastNameErrorMessage: 'Last Name cannot be empty'
            })
        } else {
            this.setState({
                lastNameErrorMessage: ''
            })
        }

        if (email.length === 0) {
            this.setState({
                emailErrorMessage: 'Email cannot be empty'
            })
        } else {
            const pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!pattern.test(email)) {
                this.setState({
                    emailErrorMessage: 'Looks like this is not an email'
                })
            } else {
                this.setState({
                    emailErrorMessage: ''
                })
            }

        }

        if (password.length === 0) {
            this.setState({
                passwordErrorMessage: 'Password cannot be empty'
            })
        } else {
            this.setState({
                passwordErrorMessage: ''
            })
        }
    }

    handleClick(event) {
        event.preventDefault();
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const email = this.state.email;
        const password = this.state.password;
        this.validateInput(firstName, lastName, email, password);
    }

    render() {
        return (
            <Form className="form bg-white px-5 rounded-2 shadow">
                <Form.Group className="mb-4">
                    <Field className="mb-4"
                        name="firstName"
                        type="text"
                        placeholder="Name"
                        value={this.state.firstName}
                        onChangeValue={this.handleChangeFirstName}
                        errorClass={this.state.firstNameErrorMessage.length !== 0 ? "error" : ""}
                    />
                    <div className="error-div">{this.state.firstNameErrorMessage}</div>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Field className="mb-4"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChangeValue={this.handleChangeLastName}
                        errorClass={this.state.firstNameErrorMessage.length !== 0 ? "error" : ""}
                    />
                    {
                        this.state.lastNameErrorMessage &&
                        <div className="error-div">{this.state.lastNameErrorMessage}</div>

                    }

                </Form.Group>
                <Form.Group className="mb-4">
                    <Field className="mb-4"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChangeValue={this.handleChangeEmail}
                        errorClass={this.state.emailErrorMessage.length !== 0 ? "error" : ""}
                    />
                    {
                        this.state.emailErrorMessage &&
                        <div className="error-div">{this.state.emailErrorMessage}</div>
                    }

                </Form.Group>
                <Form.Group className="mb-4">
                    <Field className="mb-4"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChangeValue={this.handleChangePassword}
                        errorClass={this.state.passwordErrorMessage.length !== 0 ? "error" : ""}
                    />
                    {
                        this.state.passwordErrorMessage &&
                        <div className="error-div">{this.state.passwordErrorMessage}</div>
                    }

                </Form.Group>
                <Button variant="primary" type="submit" className="btn btn-primary w-100 text-uppercase" onClick={this.handleClick.bind(this)}>
                    Claim your free trial
            </Button>
                <p className="small text-center text-grey mt-3">By clicking the button, you are agreeing to our <a className="text-red">Terms and Services</a></p>
            </Form>
        );
    }
}

export default FormComponent;