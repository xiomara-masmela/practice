import { Container } from '@chakra-ui/react'
import React, { Component } from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import CalculatorParent from './components/CalculatorParent';
import './App.css';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

class App extends Component {
  render() {
    return (
      <ChakraProvider theme={theme}>
        <Container>
        <h1> SPLITTER</h1>
          
          <CalculatorParent />

        </Container>
         
          
        

      </ChakraProvider>

    );
  }
}
export default App;