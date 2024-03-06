import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";

const Logo = () => {
  return (
    <Flex align="center">
      <Icon as={FaPaw} w={8} h={8} color="orange.400" />
      <Text fontSize="xl" fontWeight="bold" ml={2}>
        Die Samtpfoten
      </Text>
    </Flex>
  );
};

export default Logo;
