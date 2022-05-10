import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


import './App.css';
import CalculatorParent from './components/CalculatorParent';

class App extends Component {
  render() {
    return (
      <Container>
        <h1> SPLITTER</h1>
        <Row className="d-flex flex-wrap main-content justify-content-between">
          <CalculatorParent />
        </Row>
      </Container>
    );
  }
}
export default App;