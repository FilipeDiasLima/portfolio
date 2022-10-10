import { Box, Image, Text } from "@chakra-ui/react";

interface Props {
  src: string;
  title: string;
  isApp?: boolean;
}

export const CardImageProject = ({ src, title, isApp }: Props) => {
  return (
    <Box>
      <Text textTransform="uppercase" as="b" color="white.100">
        {title}
      </Text>
      <Image
        src={src}
        maxW={{
          sm: 320,
          md: 380,
          lg: 410,
          xl: 440,
          "2xl": 540,
        }}
        borderRadius={{
          sm: 6,
          md: 6,
          lg: 10,
          xl: 10,
          "2xl": 20,
        }}
        mt="2"
      />
    </Box>
  );
};
