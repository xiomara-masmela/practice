import { Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Field from "./Field";


class TotalTip extends Component {
  render() {
    const {fields} = this.props;
    console.log(fields);
    return (
      <Container>
        <Row className="d-flex flex-wrap main-content justify-content-between">
           <p>{((fields.billTotal.value * fields.tipValue.value) / fields.numberPeople.value).toFixed(2)}</p>
           
           <p>{((fields.billTotal.value /fields.numberPeople.value) + (fields.billTotal.value * fields.tipValue.value) / fields.numberPeople.value).toFixed(2)}</p>
          <Button variant="primary" type="submit">
            Reset
          </Button>
        </Row>
      </Container>


    );
  }
}
export default TotalTip;