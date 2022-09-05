import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Sidebar } from '../../components/sidebar';

export function Main() {
  return (
    <>
      <Flex>
        <Sidebar />
        <Text>a</Text>
      </Flex>
    </>
  );
}
