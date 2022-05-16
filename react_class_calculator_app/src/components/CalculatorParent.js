import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import TotalTip from './TotalTip';
import FormComponent from './FormComponent';


class CalculatorParent extends Component {
  constructor(props) {
    super(props);

    // binding funcions before declaring state because
    // validateNotEmpty and validateEmailFormat are
    // passed to state
    // this.validateNotZero = this.validateNotZero.bind(this);
    // this.validateEmailFormat = this.validateEmailFormat.bind(this);
    // this.validateField = this.validateField.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      fields: {
        inputData: {
          billTotal: {
            value: 0.00,
            name: 'billTotal',
            type: 'number',
            label: 'Bill',
            onChange: this.handleChange,
            placeholder: '0.00',
            hasError: false,
            errorMessage: '',
            validation: [
              // this.validateNotZero,
            ]
          },
          tipValue: {
            name: 'tipValue',
            type: 'RadioGroup',
            onChange: this.handleChange,
            value: 0,
            options: [
              {
                value: 0.05,
                name: 'tipValue',
                type: 'radio',
                label: '5%',
                checked: false
              },
              {
                value: 0.1,
                name: 'tipValue',
                type: 'radio',
                label: '10%',
                checked: false
              }, {
                value: 0.15,
                name: 'tipValue',
                type: 'radio',
                label: '15%',
                checked: false
              },
              {
                value: 0.25,
                name: 'tipValue',
                type: 'radio',
                label: '25%',
                checked: false
              },
              {
                value: 0.50,
                name: 'tipValue',
                type: 'radio',
                label: '50%',
                checked: false
              },
              {
                value: 0,
                name: 'tipValue',
                type: 'radio',
                label: 'Custom',
                checked: false
              }

            ]

          },
          numberPeople: {
            value: 0.00,
            name: 'numberPeople',
            type: 'number',
            label: 'Number of People',
            onChange: this.handleChange,
            placeholder: '0.00',
            hasError: false,
            errorMessage: '',
            validation: [
              // this.validateNotZero,
            ]
          }
        }
      }
    };
  }

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.value, event.target)
    this.setState({
      ...this.state,
      fields: {
        ...this.state.fields,
        inputData: {
          ...this.state.fields.inputData,
          [event.target.name]: {
            ...this.state.fields.inputData[event.target.name],
            value: event.target.value,
          }

        }

      }
    });
  }
  render() {
    return (
      <Container>
        <Row className="d-flex flex-wrap main-content justify-content-between">
          <Col className="col-lg-5 col-md-12  col-sm-12   d-flex  flex-column justify-content-center">
            <FormComponent fields={this.state.fields.inputData} />
          </Col>
          <Col className="col-lg-5 col-md-12  col-sm-12   d-flex  flex-column justify-content-center">
            <TotalTip fields={this.state.fields.inputData} />
          </Col>
        </Row>
      </Container>


    );
  }
}
export default CalculatorParent;