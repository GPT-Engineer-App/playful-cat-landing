import { Box, Container, Heading, Text, SimpleGrid, Image, Stack, Button, Icon, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaCat, FaPaw, FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Everything About <br />
          <Text as={"span"} color={"orange.400"}>
            Cats
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Discover the fascinating world of cats, their breeds, care tips, and the unique bond they share with their humans.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button rounded={"full"} px={6} colorScheme={"orange"} bg={"orange.400"} _hover={{ bg: "orange.500" }} leftIcon={<Icon as={FaPaw} />}>
            Learn More
          </Button>
          <Button rounded={"full"} px={6}>
            Get Started
          </Button>
        </Stack>
        <Image src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNzA5NzU1Mjk2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Main cat image" size={"2xl"} mt={10} rounded={"md"} shadow={"xl"} />
      </Stack>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature icon={<FaCat />} title={"Breeds"} text={"Explore a wide variety of cat breeds, each with its unique characteristics and personality."} />
          <Feature icon={<FaHeart />} title={"Adoption"} text={"Find out how you can adopt a furry friend and give them the loving home they deserve."} />
          <Feature icon={<FaPaw />} title={"Care"} text={"Learn about the best practices for taking care of your cat, ensuring a happy and healthy life."} />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("orange.500", "orange.300")} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default Index;
