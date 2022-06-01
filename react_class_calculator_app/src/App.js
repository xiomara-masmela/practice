import { Container, Flex, ChakraProvider, Heading } from '@chakra-ui/react';
import React, { Component } from 'react';
import CalculatorParent from './components/CalculatorParent';
import customTheme  from './componentTheme';
import "@fontsource/space-mono";

class App extends Component {
  render() {
    return (
      <ChakraProvider theme={customTheme}>
        <Container maxW='1200px' h="100vh" pt="98px">
          <Flex width="full" align="center" justifyContent="center" direction="column">
          <Heading mb="46px" as="h1" width="75px" fontSize="26px" letterSpacing="0.4px" color="hsl(186, 14%, 43%)" > SPLITTER</Heading>
          <CalculatorParent />
          </Flex>
        </Container>
      </ChakraProvider>
    );
  }
}
export default App;