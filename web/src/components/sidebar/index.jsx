import { Flex, Img, Link } from '@chakra-ui/react';
import perfilCirculo from '../../assets/perfilCirculo.png';
import React from 'react';

export function Sidebar() {
  return (
    <Flex color="white" w="225px" h="100vh" bg="#24344C">
      <Flex
        pos="sticky"
        left="5"
        h="95vh"
        marginTop="2.5vh"
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
        borderRadius="30px"
        w="200px"
        flexDir="column"
        justifyContent="space-between"
      >
        <Flex p="5%" flexDir="column" w="100%" alignItems="small" as="nav">
          <Img src={perfilCirculo} boxSize="100px" ml="30px" mb="150px" />
          <Link href="https://www.youtube.com/watch?v=BIyOsW4Fpzo" bg="black">
            Teste
          </Link>
          <Link href="https://www.youtube.com/watch?v=yzSFVOI8sIg&t=1448s">Teste1</Link>
          <Link href="https://www.youtube.com/watch?v=bHGsP-keGFs">Teste2</Link>
          <Link href="https://www.youtube.com/watch?v=jYdaQJzcAcw">Teste3</Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
