import { Box, Img, Link, List, ListItem } from '@chakra-ui/react';
import perfilCirculo from '../../assets/perfilCirculo.png';
import React from 'react';
import { Link as ReachLink } from '@reach/router';

export function Sidebar() {
  return (
    <Box color="white" w="225px" h="100vh" bg="#1F5E81" p="20px" position="fixed">
      <List>
        <Img src={perfilCirculo} w="100px" margin="0px 25px 30px 40px" />
        <ListItem padding="13px 20px">
          <Link as={ReachLink} to="/cadastro">
            Menu
          </Link>
        </ListItem>
        <ListItem padding="13px 20px">
          <Link>Pokemon1</Link>
        </ListItem>
        <ListItem padding="13px 20px">
          <Link>Pokemon2</Link>
        </ListItem>
        <ListItem padding="13px 20px">
          <Link>Pokemon5</Link>
        </ListItem>
        <ListItem padding="13px 20px">
          <Link>Pokemon4</Link>
        </ListItem>
      </List>
    </Box>
  );
}
