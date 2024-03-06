import { Box, Flex, Text, Icon, Stack } from "@chakra-ui/react";
import { FaCat } from "react-icons/fa";

const Logo = () => {
  return (
    <Flex align="center">
      <Icon as={FaCat} w={10} h={10} color="orange.400" />
      <Text fontSize="xl" fontWeight="bold" ml={2} fontFamily="'Caveat', cursive">
        Die Samtpfoten
      </Text>
    </Flex>
  );
};

export default Logo;
