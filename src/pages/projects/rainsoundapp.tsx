import {
  Box,
  Divider,
  Flex,
  Image,
  Link,
  Text,
  useBreakpointValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { BackgroundPage } from "../../components/BackgroundPage";
import { CardImageProject } from "../../components/CardImageProject";
import { TopImagesProject } from "../../components/TopImagesProject";

export default function Project() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <>
      <Head>
        <title>Filipe Dias | Projetos - RAIN SOUND APP</title>
      </Head>
      <BackgroundPage
        showHeader={true}
        align="center"
        justify="center"
        px={["10%", "12%"]}
        w="100%"
        minH="100vh"
        flexDir={["column"]}
        justifyContent={"space-evenly"}
      >
        <Image
          src="/images/rainsoundapp.png"
          objectFit={"cover"}
          boxSize={"220"}
          borderRadius={"20"}
          position={"relative"}
          top={20}
          my={20}
          boxShadow="dark-lg"
        />
        <Divider colorScheme={"whiteAlpha"} borderColor={"none"} my={20} />
        <Flex flexDir={"column"} w={"90%"} alignItems="center">
          {!isMobile && (
            <TopImagesProject
              src1="/images/rainsoundapp2.png"
              src2="/images/rainsoundapp3.png"
              src3="/images/rainsoundapp4.png"
              isApp
            />
          )}

          <Text
            mt={{ sm: 4, md: 10 }}
            w={{ sm: "95%", md: "85%" }}
            textAlign={"center"}
          >
            Este app foi desenvolvido para executar um áudio de chuva, com
            incrementos de sons de vento e trovões para imersão do usuário,
            também é possível regular o volume. O aplicativo usa um arquivo de
            áudio MP3 e o deixa em loop. O app funcionado tanto para Android
            quanto para IOS. O código e as tecnologias do projeto estão no meu
            repositório do github, o link está ao final desta página.
          </Text>
          <Wrap spacing="40px" align={"center"} justify={"center"} mt={10}>
            <WrapItem>
              <CardImageProject
                src={"/images/rainsoundapp1.png"}
                title="inicio"
                isApp
              />
            </WrapItem>
            <WrapItem>
              <CardImageProject
                src={"/images/rainsoundapp2.png"}
                title="criação de uma anotação"
                isApp
              />
            </WrapItem>
            <WrapItem>
              <CardImageProject
                src={"/images/rainsoundapp3.png"}
                title="anotações"
                isApp
              />
            </WrapItem>
            <WrapItem>
              <CardImageProject
                src={"/images/rainsoundapp4.png"}
                title="anotação aberta"
                isApp
              />
            </WrapItem>
          </Wrap>
        </Flex>
        <Divider colorScheme={"whiteAlpha"} borderColor={"none"} my={16} />
        <VStack w="100%" mb={16} spacing={4}>
          <Text>Código fonte do projeto</Text>
          <Box bg="white.100" w="60px" h="60px" borderRadius={6} p="1">
            <Image src="/images/github.png" />
          </Box>
          <NextLink
            href="https://github.com/FilipeDiasLima/RainSoundApp2.0"
            passHref
          >
            <Link target="_blank" rel="noopener noreferrer">
              https://github.com/FilipeDiasLima/RainSoundApp2.0
            </Link>
          </NextLink>
        </VStack>
      </BackgroundPage>
    </>
  );
}
