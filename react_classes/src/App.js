import { Container, Row, Col, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import FormComponent from './components/FormComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row className="d-flex flex-wrap main-content justify-content-between">
          <Col className="col-lg-5 col-md-12  col-sm-12   d-flex  flex-column justify-content-center">
            <h1 className="text-white fw-bold">Learn to code by watching others</h1>
            <p className="text-white">See how experienced developers solve problems in real-time. Watching scripted tutorials is great,but understanding how developers thinkis invaluable.</p>
          </Col>
          <Col className="col-sm-12 col-md-12 col-lg-6">
            <div className="top-div shadow bg-purple rounded d-flex justify-content-center align-items-center">
              <p className="mb-0 text-white fw-light"><span className="fw-bold">Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>
            <FormComponent />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
