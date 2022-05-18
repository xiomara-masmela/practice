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
            value: "",
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
            value: "",
            options: [
              {
                value: 0.05,
                label: '5%',
              },
              {
                value: 0.1,
                label: '10%',
              }, {
                value: 0.15,
                label: '15%',
              },
              {
                value: 0.25,
                label: '25%',
              },
              {
                value: 0.50,
                label: '50%',
              },
              {
                value: 0,
                label: 'Custom',
              }
            ]
          },
          numberPeople: {
            value: "",
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
        },
        calculateData: {
          tipAmount: {
            value: ""
          },
          total: {
            value: ""
          }
        }
      }
    };
  }

  handleChange(event) {
    event.preventDefault();
    const billTotal = Number(this.state.fields.inputData.billTotal.value);
    const tipValue = this.state.fields.inputData.tipValue.value.value;
    const numberOfPeople = Number(this.state.fields.inputData.numberPeople.value);
    const totalTipAmount = billTotal * tipValue / numberOfPeople;
    const totalPayPerson = billTotal / numberOfPeople + totalTipAmount;
    console.log(this.state.fields.inputData.tipValue.value.value);
    console.log(billTotal);
    console.log(numberOfPeople);

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
        },
        calculateData : {
          ...this.state.fields.calculateData,
          tipAmount: {
            ...this.state.fields.calculateData.tipAmount,
            value: totalTipAmount
          },
          total: {
            ...this.state.fields.calculateData.total,
            value: totalPayPerson
          }
        }

      }
    });

  }
  render() {
    console.log(this.state)
    return (
      <Container>
        <Row className="d-flex flex-wrap main-content justify-content-between">
          <Col className="col-lg-5 col-md-12  col-sm-12   d-flex  flex-column justify-content-center">
            <FormComponent fields={this.state.fields.inputData} />
          </Col>
          <Col className="col-lg-5 col-md-12  col-sm-12   d-flex  flex-column justify-content-center">
            <TotalTip fields={this.state.fields.calculateData} />
          </Col>
        </Row>
      </Container>


    );
  }
}
export default CalculatorParent;