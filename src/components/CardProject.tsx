import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
  imgSrc: string;
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  path: string;
}

export const CardProject = ({
  imgSrc,
  tech1,
  tech2,
  tech3,
  tech4,
  title,
  path,
}: Props) => {
  const router = useRouter();
  return (
    <Flex
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      cursor={"pointer"}
      onClick={() => router.push(path)}
    >
      <Image
        src={imgSrc}
        objectFit={"cover"}
        boxSize={"220"}
        borderRadius={"20"}
        position={"relative"}
        top={20}
        boxShadow="dark-lg"
      />
      <Box
        display={"flex"}
        flexDir={"column"}
        bg={"gray.200"}
        w={"300px"}
        borderRadius={"10"}
        pt={24}
        pb={6}
      >
        <Text
          as="b"
          textTransform={"uppercase"}
          w={"100%"}
          textAlign={"center"}
        >
          {title}
        </Text>
        <VStack mt={3} spacing={2}>
          <Text textTransform={"capitalize"} as="p">
            {tech1}
          </Text>
          <Text textTransform={"capitalize"} as="p">
            {tech2}
          </Text>
          <Text textTransform={"capitalize"} as="p">
            {tech3}
          </Text>
          <Text textTransform={"capitalize"} as="p">
            {tech4}
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};
