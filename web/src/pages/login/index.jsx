import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import charmanderGroup from "../../assets/charmanderGroup.png";

export function Login() {
    return (
        <Flex alignItems="center" justifyContent="center" bg="#de5138" h="100vh">
            <Flex bg="#e53800" w="700px" h="400px" boxShadow="2px 1px 15px 3px rgba(0,0,0,0.32)" borderRadius="5px">
                <Image src={charmanderGroup} />
            </Flex>
        </Flex>
    );
}
