import { MainCard } from "@/components/Cards/MainCard";
import { DivTransition } from "@/components/DivTransition";
import { PageTransition } from "@/components/PageTransition";
import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Head from "next/head";

const Techs = () => {
  return (
    <>
      <Head>
        <title>Filipe Dias | Minhas Techs</title>
      </Head>
      <PageTransition>
        <Container as="main" maxW="80%">
          <MainCard
            title="Meus projetos são feitos com essas"
            greenTitle="techs"
          />
          <SimpleGrid columns={[1, 1, 2]} gap={4} mt={10}>
            <VStack alignItems="center">
              <Image
                src="/images/techs/react-js.png"
                rounded="xl"
                objectFit="cover"
                w={200}
                h={120}
              />
              <Text fontSize="lg" fontWeight="bold">
                React Js
              </Text>
              <Text fontSize="md">Web</Text>
            </VStack>

            <VStack alignItems="center">
              <Image
                src="/images/techs/next-js.webp"
                rounded="xl"
                objectFit="cover"
                w={200}
                h={120}
              />
              <Text fontSize="lg" fontWeight="bold">
                Next Js
              </Text>
              <Text fontSize="md">Web</Text>
            </VStack>

            <VStack alignItems="center">
              <Image
                src="/images/techs/react-native.png"
                rounded="xl"
                objectFit="cover"
                w={200}
                h={120}
              />
              <Text fontSize="lg" fontWeight="bold">
                React Native
              </Text>
              <Text fontSize="md">iOS e Android</Text>
            </VStack>

            <VStack alignItems="center">
              <Image
                src="/images/techs/node-js.jpg"
                rounded="xl"
                objectFit="cover"
                w={200}
                h={120}
              />
              <Text fontSize="lg" fontWeight="bold">
                Node JS
              </Text>
              <Text fontSize="md">API e Backend</Text>
            </VStack>

            <VStack alignItems="center">
              <Image
                src="/images/techs/expo.jpg"
                rounded="xl"
                objectFit="cover"
                w={200}
                h={120}
              />
              <Text fontSize="lg" fontWeight="bold">
                Expo
              </Text>
              <Text fontSize="md">iOS e Android</Text>
            </VStack>

            <VStack alignItems="center">
              <Image
                src="/images/techs/figma.jpeg"
                rounded="xl"
                objectFit="cover"
                w={200}
                h={120}
              />
              <Text fontSize="lg" fontWeight="bold">
                Figma
              </Text>
              <Text fontSize="md">Design</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </PageTransition>
    </>
  );
};

export default Techs;
