import React, { Component } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import customTheme  from '../componentTheme';

class Field extends Component {
  render() {
    const { name, label, type, placeholder, value, onChange, hasError, errorMessage } = this.props;
    return (
      <FormControl bg={customTheme.colors.lightGrayCyan}>
        <FormLabel>{label}</FormLabel>
        <Input
          bg="hsl(189, 41%, 97%)"
          border="none"
          color="hsl(183, 100%, 15%)"
          className={hasError ? "error" : ""}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {hasError &&
          <div className="error-div">{errorMessage}</div>
        }
      </FormControl>
    );
  }
}

export default Field;