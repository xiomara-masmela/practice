
import React, { Component } from 'react';
import Field from "./Field";
import { Button, Box, Flex, Text } from '@chakra-ui/react'
import customTheme from '../componentTheme';

class TotalTip extends Component {
  render() {
    const { fields } = this.props;
    return (
      <Flex width="full" direction="column" bg="hsl(183, 100%, 15%)" borderRadius="10px" padding="40px">
        <Box w="100%">
          <Text color="hsl(0, 0%, 100%)" fontWeight="700">Tip Amount</Text>
          <Flex justifyContent="space-between">
            <Text color="hsl(189, 41%, 97%)">/ person</Text>
            {
              !isNaN(fields.tipAmount.value) && 
              <Text color="hsl(172, 67%, 45%)" fontSize='24px' fontWeight="700" >${(fields.tipAmount.value)}</Text>
            }
          </Flex>
        </Box>
        <Box>
          <Text color="hsl(0, 0%, 100%)" fontWeight="700" >Total</Text>
          <Flex justifyContent="space-between">
            <Text color="hsl(189, 41%, 97%)">/ person</Text>
            {
              !isNaN(fields.total.value) && 
              <Text color="hsl(172, 67%, 45%)" fontSize='24px' fontWeight="700">${(fields.total.value)}</Text>
            }
          </Flex>
        </Box>
        <Button type="submit" variant='primary' mt="80px">RESET</Button>
      </Flex>
    );
  }
}
export default TotalTip;