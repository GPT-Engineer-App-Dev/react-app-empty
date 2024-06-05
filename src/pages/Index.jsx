import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.500" color="white" py={4}>
        <Container maxW="container.md">
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">My Website</Text>
            <Flex>
              <Link href="#" mx={2} color="white">Home</Link>
              <Link href="#" mx={2} color="white">About</Link>
              <Link href="#" mx={2} color="white">Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.md" flex="1" py={8}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is a simple, responsive layout using Chakra UI.</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="blue.500" color="white" py={4}>
        <Container maxW="container.md">
          <Text textAlign="center">&copy; {new Date().getFullYear()} My Website. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;