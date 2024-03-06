import { Box, Flex, Text, Icon, Stack } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";

const Logo = () => {
  return (
    <Flex align="center">
      <Stack direction="row" spacing="-0.5" align="center">
        <Box w={4} h={4} borderTopLeftRadius="full" borderTopRightRadius="full" bg="orange.400" />
        <Icon as={FaPaw} w={8} h={8} color="orange.400" />
        <Box w={4} h={4} borderTopLeftRadius="full" borderTopRightRadius="full" bg="orange.400" />
      </Stack>
      <Text fontSize="xl" fontWeight="bold" ml={2}>
        Die Samtpfoten
      </Text>
    </Flex>
  );
};

export default Logo;
