import { Box, Heading } from "@chakra-ui/react";

interface Props {
  title: string;
}

export const HeaderTopic = ({ title }: Props) => {
  return (
    <Heading
      fontSize="xl"
      textDecoration="underline"
      textUnderlineOffset={6}
      textDecorationColor="green.main"
      mb={4}
    >
      {title}
    </Heading>
  );
};
