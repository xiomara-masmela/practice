import React, { Component } from 'react';
import { Form, Label, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Field({ name, type, placeholder, value, onChange, errorClass }) {
    return (
        <>
            <Form.Control className={errorClass}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}

            />
        </>
    )
}

export default Field;