
import React, { Component } from 'react';
import Field from "./Field";
import { Button, Box, Flex, Text } from '@chakra-ui/react'
import customTheme from '../componentTheme';

class TotalTip extends Component {
  render() {
    const { fields, onReset } = this.props;

    return (
      <Flex width="full" direction="column" bg="hsl(183, 100%, 15%)" borderRadius="10px" padding="25px 25px 25px 35px">
        <Box w="100%">
          <Text color="hsl(0, 0%, 100%)" fontWeight="700" fontSize='12px' >Tip Amount</Text>
          <Flex justifyContent="space-between">
            <Text color="hsl(184, 14%, 56%)" fontSize='12px'>/ person</Text>
            <Text color="hsl(172, 67%, 45%)" fontSize='26px' fontWeight="700" >
              {
                fields.tipAmount.value
                  ? `$ ${fields.tipAmount.value}`
                  : ""
              }
            </Text>
          </Flex>
        </Box>
        <Box mt="18px">
          <Text color="hsl(0, 0%, 100%)" fontWeight="700" fontSize='12px' >Total</Text>
          <Flex justifyContent="space-between">
            <Text color="hsl(184, 14%, 56%)" fontSize='12px'>/ person</Text>
            <Text color="hsl(172, 67%, 45%)" fontSize='26px' fontWeight="700">
              {
                fields.total.value
                  ? `$ ${fields.total.value}`
                  : ""
              }
            </Text>
          </Flex>
        </Box>
        <Button type="submit" variant='primary' bg='hsl(185, 41%, 84%)'  fontWeight="700" mt="80px" onClick={onReset}>RESET</Button>
      </Flex>
    );
  }
}
export default TotalTip;