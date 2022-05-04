import React, { Component, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from './Field';

function FormComponent(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");


    function handleChangeFirstName(event){
        console.log(event.target.value)
        setFirstName(event.target.value)
    }
    function handleChangeLastName(event){
        console.log(event.target.value)
        setLastName(event.target.value)
    }
    function handleChangeEmail(event){
        setEmail(event.target.value)
    }

    function handleChangePassword(event){
        setPassword(event.target.value)
    }

    function isEmail(email) {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email.value)) {
            return false;
        }
    }

    function validateInput(firstName, lastName, email, password){
        if(firstName.length === 0){
            setFirstNameErrorMessage("Name cannot be empty");
        }
        if(lastName.length === 0){
            setLastNameErrorMessage("Last Name cannot be empty");
        }
        if(email.length === 0){
            setEmailErrorMessage("Email cannot be empty");
        }else {
            const isEmail1 = isEmail(email);
            if(!isEmail1){
                setEmailErrorMessage("Looks like this is not an email");
            }else {
                setEmailErrorMessage("");
            }
        }
        if(password.length === 0){
            setPasswordErrorMessage("Password cannot be empty");
        }
    }



    function handleClick(event){
        event.preventDefault();
        const errors = validateInput(firstName, lastName, email, password);
    }
    return(
        <Form className="form bg-white px-5 rounded-2 shadow">
        <Form.Group className="mb-4">
            <Field className="mb-4" 
                name="firstName"
                type="text" 
                placeholder="Name" 
                value={firstName}
                onChangeValue={handleChangeFirstName} 
                errorClass={firstNameErrorMessage.length !== 0 ? "error" : ""}
                
            />
            <div className="error-div">{firstNameErrorMessage}</div>
        </Form.Group>
        <Form.Group className="mb-4">
        <Field className="mb-4" 
            name="lastName"
            type="text" 
            placeholder="Last Name"  
            value={lastName}
            onChangeValue={handleChangeLastName}
            errorClass={firstNameErrorMessage.length !== 0 ? "error" : ""}
            />
            <div className="error-div">{lastNameErrorMessage}</div>
        </Form.Group>
        <Form.Group className="mb-4">
            <Field className="mb-4" 
                name="email"
                type="email" 
                placeholder="Email" 
                value={email}
                onChangeValue={handleChangeEmail} 
                errorClass={emailErrorMessage.length !== 0 ? "error" : ""} 
                />
            <div className="error-div">{emailErrorMessage}</div>
        </Form.Group>
        <Form.Group className="mb-4">
            <Field className="mb-4" 
                name="password"
                type="password" 
                placeholder="Password" 
                value={password}
                onChangeValue={handleChangePassword}
                errorClass={passwordErrorMessage.length !== 0 ? "error" : ""} 
                />
             <div className="error-div">{passwordErrorMessage}</div> 
        </Form.Group>
       
        <Button variant="primary" type="submit" className="btn btn-primary w-100 text-uppercase"  onClick={handleClick}>
            Claim your free trial
        </Button>
        <p className="small text-center text-grey mt-3">By clicking the button, you are agreeing to our <a className="text-red">Terms and Services</a></p>
    </Form>
    )
}

export default FormComponent;