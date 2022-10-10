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
        <title>Filipe Dias | Projetos - GGSTORE</title>
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
          src="/images/ggstore.png"
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
              src1="/images/ggstore3.png"
              src2="/images/ggstore2.png"
              src3="/images/ggstore1.png"
              isApp={false}
            />
          )}

          <Text
            mt={{ sm: 4, md: 10 }}
            w={{ sm: "95%", md: "85%" }}
            textAlign={"center"}
          >
            Este projeto foi desenvolvido para ser uma loja online de jogos
            virtuais, a loja se basea na venda de keys dos jogos disponiveis.
            Conta com um administrado para cadastrar novos produtos com imagens
            e descrição e conta com um usuário comum, que será o comprador. É
            possível adicionar um jogo no carrinho e nos favoritos, logar na
            plataforma, usando cookies do navegador, um backend e um banco de
            dados. O código e as tecnologias do projeto estão no meu repositório
            do github, o link está ao final desta página.
          </Text>
          <Wrap spacing="40px" align={"center"} justify={"center"} mt={10}>
            <WrapItem>
              <CardImageProject src={"/images/ggstore1.png"} title="inicio" />
            </WrapItem>
            <WrapItem>
              <CardImageProject src={"/images/ggstore2.png"} title="loja" />
            </WrapItem>
            <WrapItem>
              <CardImageProject
                src={"/images/ggstore3.png"}
                title="biblioteca"
              />
            </WrapItem>
            <WrapItem>
              <CardImageProject
                src={"/images/ggstore4.png"}
                title="detalhes do jogo"
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
          <NextLink href="https://github.com/FilipeDiasLima/GGStore" passHref>
            <Link target="_blank" rel="noopener noreferrer">
              https://github.com/FilipeDiasLima/GGStore
            </Link>
          </NextLink>
        </VStack>
      </BackgroundPage>
    </>
  );
}
