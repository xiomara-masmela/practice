import { Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Field from "./Field";


class CalculateTip extends Component {
  render() {
    const {fields} = this.props;
    return (
      <Container>
        <Row className="d-flex flex-wrap main-content justify-content-between">
          {
            Object.entries(fields).map(([name, field]) => (
              <Field key={name}
                name={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                value={field.value}
                onChange={this.onChangeValue}
              />
            ))
          }
          <Button variant="primary" type="submit">
            Reset
          </Button>
        </Row>
      </Container>


    );
  }
}
export default CalculateTip;