import React from 'react';
import { Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Field({ name, type, placeholder, value, onChange, hasError, errorMessage }) {
    return (
        <Form.Group className="mb-4">
            <Form.Control className={hasError ? "error" : ""}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <div className="error-div">{errorMessage} </div>
        </Form.Group>
    )
}

export default Field;