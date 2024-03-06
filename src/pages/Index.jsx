import { Box, Container, Text, SimpleGrid, Image, Stack, Button, Icon, Flex, useColorModeValue } from "@chakra-ui/react";
import Logo from "../components/Logo.jsx";
import { FaCat, FaPaw, FaHeart, FaLeaf } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Logo />
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
          <Feature icon={<FaCat />} title={"Breeds"} text={"Explore a wide variety of cat breeds, each with its unique characteristics and personality."} image="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" />
          <Feature icon={<FaHeart />} title={"Adoption"} text={"Find out how you can adopt a furry friend and give them the loving home they deserve."} image="https://images.unsplash.com/photo-1605346431349-ff6e0b5a2d3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" />
          <Feature icon={<FaPaw />} title={"Care"} text={"Learn about the best practices for taking care of your cat, ensuring a happy and healthy life."} image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" />
          <Feature icon={<FaLeaf />} title={"Veganes Katzenfutter"} text={"Discover the benefits and importance of vegan cat food for a sustainable and compassionate lifestyle. Find tips for a balanced and nutrient-rich vegan diet for your feline friend."} image="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" link="/vegan-food" />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

const Feature = ({ title, text, icon, image, link }) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("orange.500", "orange.300")} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Image src={image} boxSize="160px" objectFit="cover" borderRadius="md" alt={title} />
      <Text color={"gray.600"}>{text}</Text>
      {link && (
        <Button as="a" href={link} colorScheme="orange" variant="outline">
          Learn More
        </Button>
      )}
    </Stack>
  );
};

export default Index;
