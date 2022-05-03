import React, { Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from './Field';


class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            information: {
                value: [],
                type: props.type,
                placeholder: props.placeholder,
            }
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChangeName(event){
        console.log("name", event.target.value);
        const value = event.target.value;
        this.setState({information: {value: [...value]}});

    }
    handleChangeLastName(event){
        this.setState({information: [...event.target.value]});

    }

    handleChangeEmail(event){
        this.setState({information: {value: event.target.value}});

    }

    handleChangePassword(event){
        this.setState({information: [...event.target.value]});

    }


    handleClick(){
        
        console.log("click!");
    }
  
    render() {
        const { value } = this.state.information.value;
      return (
        <Form className="form bg-white px-5 rounded-2 shadow">
            <Field className="mb-4" 
                type="text" 
                placeholder="Name" 
                value={value}
                onChangeValue={this.handleChangeName} 
            />
            <Field className="mb-4" 
                type="text" 
                placeholder="Last Name"  
                value={value}
                onChangeValue={this.handleChangeLastName}/>
            <Field className="mb-4" 
                type="email" 
                placeholder="Email" 
                value={value}
                onChangeValue={this.handleChangeEmail} />
            <Field className="mb-4" 
                type="password" 
                placeholder="Password" 
                value={value}
                onChangeValue={this.handleChangePassword} />
            <Button variant="primary" type="submit" className="btn btn-primary w-100 text-uppercase"  onClick={this.handleClick.bind(this)}>
            Claim your free trial
            </Button>
            <p class="small text-center text-grey mt-3">By clicking the button, you are agreeing to our <a class="text-red">Terms and Services</a></p>
        </Form>
      );
    }
  }

export default FormComponent;