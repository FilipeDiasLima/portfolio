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
        <title>Filipe Dias | Projetos - SPEED TYPING TEST</title>
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
          src="/images/typingtext.png"
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
              src1="/images/tt2.png"
              src2="/images/tt1.png"
              src3="/images/tt3.png"
              isApp={false}
            />
          )}

          <Text
            mt={{ sm: 4, md: 10 }}
            w={{ sm: "95%", md: "85%" }}
            textAlign={"center"}
          >
            Este projeto se trata de uma plataforma que mede suas habilidades de
            digitação no seu teclado, tanto mobile quanto físico. Você terá uma
            quantidade de palavras que deveram ser escritas corretamento por
            você, após finilizar, a plataforma irá calcular algumas métricas,
            como quantas palavras você digita por segundo, quantos acerto, entre
            outras. No menu é possível alterar o tema do site entre WHITE e
            PINK, altera o idioma entre português e inglês e ver suas
            pontuações. O código e as tecnologias do projeto estão no meu
            repositório do github, o link está ao final desta página.
          </Text>
          <Wrap spacing="40px" align={"center"} justify={"center"} mt={10}>
            <WrapItem>
              <CardImageProject src={"/images/tt1.png"} title="teste" />
            </WrapItem>
            <WrapItem>
              <CardImageProject src={"/images/tt5.png"} title="menu" />
            </WrapItem>
            <WrapItem>
              <CardImageProject src={"/images/tt4.png"} title="tema white" />
            </WrapItem>
            <WrapItem>
              <CardImageProject src={"/images/tt2.png"} title="tema pink" />
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
            href="https://github.com/FilipeDiasLima/TypingTest"
            passHref
          >
            <Link target="_blank" rel="noopener noreferrer">
              https://github.com/FilipeDiasLima/TypingTest
            </Link>
          </NextLink>
        </VStack>
      </BackgroundPage>
    </>
  );
}
