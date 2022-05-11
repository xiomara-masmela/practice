import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import InputData from './InputData';
import CalculateTip from './CalculateTip';


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
            value: '',
            name: 'billTotal',
            type: 'number',
            label: 'Bill',
            onChange: this.handleChange,
            placeholder: '0',
            hasError: false,
            errorMessage: '',
            validation: [
              // this.validateNotZero,
            ]
          },
          tipValue: {
            5: {
              value: 5,
              name: 'tipValue',
              type: 'radio',
              label: '5%',
              onChange: this.handleChange,
              checked: false
            },
            10: {
              value: 10,
              name: 'tipValue',
              type: 'radio',
              label: '10%',
              onChange: this.handleChange,
              checked: false
            },
            15: {
              value: 15,
              name: 'tipValue',
              type: 'radio',
              label: '15%',
              onChange: this.handleChange,
              checked: false
            },
            25: {
              value: 25,
              name: 'tipValue',
              type: 'radio',
              label: '25%',
              onChange: this.handleChange,
              checked: false
            },
            50: {
              value: 50,
              name: 'tipValue',
              type: 'radio',
              label: '50%',
              onChange: this.handleChange,
              checked: false
            },
            custom: {
              value: 0,
              name: 'tipValue',
              type: 'radio',
              label: 'Custom',
              onChange: this.handleChange,
              checked: false
            }
          },
          numberPeople: {
            value: '',
            name: 'numberPeople',
            type: 'number',
            label: 'Number of People',
            onChange: this.handleChange,
            placeholder: '0',
            hasError: false,
            errorMessage: '',
            validation: [
              // this.validateNotZero,
            ]
          }
        },
        calculateData: {
          tipAmount: {
            value: '',
            name: 'tipAmount',
            type: 'number',
            label: 'Tip Amount',
            onChange: this.handleChange,
            placeholder: '0',
          },
          total: {
            value: '',
            name: 'total',
            type: 'number',
            label: 'Tip Amount',
            placeholder: '0',

          }

        }

      }
    };
  }
  render() {
    return (
      <Container>
        <Row className="d-flex flex-wrap main-content justify-content-between">
          <Col className="col-lg-5 col-md-12  col-sm-12   d-flex  flex-column justify-content-center">
            <InputData fields={this.state.fields.inputData} />
          </Col>
          <Col className="col-lg-5 col-md-12  col-sm-12   d-flex  flex-column justify-content-center">
            <CalculateTip fields={this.state.fields.calculateData} />
          </Col>
        </Row>
      </Container>


    );
  }
}
export default CalculatorParent;