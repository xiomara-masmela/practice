import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import InputData from './InputData';
import CalculateTip from './CalculateTip';


class CalculatorParent extends Component {
  render() {
    return (
        <Container>
        <Row className="d-flex flex-wrap main-content justify-content-between">
          PArent
          <InputData />
          <CalculateTip />
          
        </Row>
      </Container>

      
    );
  }
}
export default CalculatorParent;