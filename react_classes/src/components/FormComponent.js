import React, { Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from './Field';

export class ErrorComponent extends Component {
    render() {
        const {fieldInput, errorMessage} = this.props;
        return(
            <div>{fieldInput} is {errorMessage} </div>
        )
    }
}


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
            errorMessage : '',
            
        };
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeFirstName(event){
        this.setState({
            firstName: event.target.value
            }
        );
    }
    handleChangeLastName(event){
        this.setState({
            lastName: event.target.value
            }
        );
    }

    handleChangeEmail(event){
        this.setState({
            email: event.target.value
            }
        );
    }

    handleChangePassword(event){
        this.setState({
            password: event.target.value
            }
        );
    }

    isEmpty(field) {
        if(field.lenght === 0){
            this.setState({
                errorMessage: "This"
            })
        }
    }


    handleClick(event){
        event.preventDefault();
        console.log("click!");
        console.table(this.state);
        alert("You have clicked!");
        
        const name = this.state.firstName;

        isEmpty(this.state.firstName);

        
    
    }

    handleError(event){
        this.setState({
            errorMessage: `${event.target.name} is empty`
        })
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
                />
                {this.state.firstName.length}
                
                     <ErrorComponent fieldInput="firstName" errorMessage="empty" />
                
               
            </Form.Group>
            <Form.Group className="mb-4">
            <Field className="mb-4" 
                name="lastName"
                type="text" 
                placeholder="Last Name"  
                value={this.state.lastName}
                onChangeValue={this.handleChangeLastName}
                />

            </Form.Group>
            <Form.Group className="mb-4">
            <Field className="mb-4" 
                name="email"
                type="email" 
                placeholder="Email" 
                value={this.state.email}
                onChangeValue={this.handleChangeEmail} />

            </Form.Group>
            

            <Form.Group className="mb-4">
            <Field className="mb-4" 
                name="password"
                type="password" 
                placeholder="Password" 
                value={this.state.password}
                onChangeValue={this.handleChangePassword} />
            </Form.Group>
           
            <Button variant="primary" type="submit" className="btn btn-primary w-100 text-uppercase"  onClick={this.handleClick.bind(this)}>
                Claim your free trial
            </Button>
            <p className="small text-center text-grey mt-3">By clicking the button, you are agreeing to our <a className="text-red">Terms and Services</a></p>
        </Form>
      );
    }
  }

export default FormComponent;