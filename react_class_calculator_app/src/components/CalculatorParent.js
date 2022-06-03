import { Flex } from '@chakra-ui/react';
import React, { Component } from 'react';
import TotalTip from './TotalTip';
import FormComponent from './FormComponent';
import customTheme from '../componentTheme';


class CalculatorParent extends Component {
  constructor(props) {
    super(props);

    // binding funcions before declaring state because
    // validateNotEmpty is passed to state
    this.validateNotZero = this.validateNotZero.bind(this);
    // this.validateEmailFormat = this.validateEmailFormat.bind(this);
    // this.validateField = this.validateField.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isImaginaryNumber = this.isImaginaryNumber.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.initialState = {
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
                checked: false
              },
              {
                value: 0.1,
                label: '10%',
                checked: false
              }, {
                value: 0.15,
                label: '15%',
                checked: false
              },
              {
                value: 0.25,
                label: '25%',
                checked: false
              },
              {
                value: 0.50,
                label: '50%',
                checked: false
              },
              {
                value: 0,
                label: 'Custom',
                checked: false
              }
            ]
          },
          numberPeople: {
            value: "",
            name: 'numberPeople',
            type: 'number',
            label: 'Number of People',
            onChange: this.handleChange,
            placeholder: '0',
            hasError: false,
            errorMessage: '',
            validation: [
              this.validateNotZero
            ]
          }
        },
        calculateData: {
          tipAmount: {
            value: 0.00
          },
          total: {
            value: 0.00
          }
        }
      }
    };

    this.state = this.initialState;
  }

  validateNotZero(value) {
    return value === 0 ? "Can't be zero" : "";
  }

  isImaginaryNumber(num) {
    return num === Infinity || isNaN(num);
  }

  handleChange(event) {
    event.preventDefault();

    const nextState = {
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
      }
    };

    const billTotal = Number(nextState.fields.inputData.billTotal.value);
    const tipValue = nextState.fields.inputData.tipValue.value.value;
    const numberOfPeople = Number(nextState.fields.inputData.numberPeople.value);
    const totalTipAmount = billTotal * tipValue / numberOfPeople;
    const totalPayPerson = billTotal / numberOfPeople + totalTipAmount;

    this.setState({
      ...nextState,
      fields: {
        ...nextState.fields,
        calculateData: {
          tipAmount: {
            value: this.isImaginaryNumber(totalTipAmount) ? "" : totalTipAmount.toFixed(2)
          },
          total: {
            value: this.isImaginaryNumber(totalPayPerson) ? "" : totalPayPerson.toFixed(2)
          }
        }

      }
    });

  }

  handleReset() {
    this.setState(this.initialState);
  }
  render() {
    return (
      <Flex bg={customTheme.colors.white} width={['100%', null, '643px']} borderRadius="10px" padding="25px 25px 25px 35px" direction={{ base: 'column', md: 'row' }} >
        <FormComponent fields={this.state.fields.inputData} />
        <TotalTip fields={this.state.fields.calculateData} onReset={this.handleReset} />
      </Flex>
    );
  }
}
export default CalculatorParent;