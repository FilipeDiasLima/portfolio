import { Box, Text, Img, useColorModeValue } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import Image from "next/image";
import { motion } from "framer-motion";
import NextLink from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const ProjectCard = ({ description, image, title, url }: Props) => {
  return (
    <Box
      as={NextLink}
      href={`/projects/${url}`}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
      borderWidth={1}
      borderColor="transparent"
      borderRadius="lg"
      p={3}
      shadow="lg"
      transition="border-color 0.2s"
      _hover={{
        borderColor: useColorModeValue("gray.background", "gray.lightCard"),
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        rounded="lg"
        w="100%"
        overflow="hidden"
      >
        <Image
          src={`/images/projects/${image}`}
          alt={title}
          blurDataURL="blur"
          placeholder="blur"
          width={250}
          height={120}
          // className="grid-item-thumbnail"
          style={{
            borderRadius: 8,
          }}
        />
      </Box>
      <Text mt={2} textAlign="center" fontWeight="bold" fontSize="md">
        {title}
      </Text>
      <Text mt={2} textAlign="center" fontWeight="normal" fontSize="xs">
        {description}
      </Text>
    </Box>
  );
};

export const ProjectCardStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        transition: transform 0.4s;
      }
      .grid-item-thumbnail:hover {
        transform: scale(1.1);
      }
    `}
  />
);
