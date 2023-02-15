import { Avatar, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Box mt={8}>
      <HStack spacing={6}>
        <Avatar
          src="https://github.com/filipediaslima.png"
          borderWidth={2}
          borderColor="green.main"
          size="lg"
        />
        <VStack alignItems="flex-start" spacing={0}>
          <Heading fontSize="xl">Filipe Dias</Heading>
          <Text fontSize="lg">Desenvolvedor (WEB, MOBILE, BACKEND)</Text>
        </VStack>
      </HStack>
    </Box>
  );
};
