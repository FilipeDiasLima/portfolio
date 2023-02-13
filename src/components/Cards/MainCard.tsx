import { Box, Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  title: string;
  greenTitle: string;
}

export const MainCard = ({ title, greenTitle }: Props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="row"
      bg={useColorModeValue("gray.lightCard", "gray.card")}
      p={3}
      rounded="md"
      boxShadow="lg"
    >
      <Text color={useColorModeValue("gray.font", "white")}>{title}</Text>
      <Text ml={1} color="green.main">
        {greenTitle}
      </Text>
    </Box>
  );
};