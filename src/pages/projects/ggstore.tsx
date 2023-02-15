import { MainCard } from "@/components/Cards/MainCard";
import { Meta } from "@/components/Meta";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Container, Image, List, ListItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

const GGstore = () => {
  return (
    <>
      <Head>
        <title>Filipe Dias | GGstore</title>
      </Head>
      <PageTransition>
        <Container as="main" maxW="80%">
          <MainCard title="GG" greenTitle="store" />
          <Box mt={6}>
            <Text
              fontWeight="normal"
              fontSize="lg"
              textIndent="2em"
              textAlign="justify"
            >
              Este projeto foi desenvolvido para ser uma loja online de jogos
              virtuais, a loja se basea na venda de keys dos jogos disponiveis.
              Conta com um administrado para cadastrar novos produtos com
              imagens e descrição e conta com um usuário comum, que será o
              comprador. É possível adicionar um jogo no carrinho e nos
              favoritos, logar na plataforma, usando cookies do navegador, um
              backend e um banco de dados. O código e as tecnologias do projeto
              estão no meu repositório do github, o link está ao final desta
              página.
            </Text>
          </Box>
          <List ml={[0, 0, 4]} my={4} spacing={1}>
            <ListItem
              fontSize="md"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Meta>Post</Meta>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/posts/filipediaslima_javascript-frontend-typescript-activity-6987149814052360192-c8I_?utm_source=share&utm_medium=member_desktop"
              >
                <Text
                  textDecoration="underline"
                  textUnderlineOffset={4}
                  fontSize="lg"
                  textDecorationColor="green.main"
                >
                  GGstore linkedin
                </Text>
              </Link>
              <ExternalLinkIcon mx="2px" color="green.main" />
            </ListItem>

            <ListItem
              fontSize="md"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Meta>Plataformas</Meta>
              <Text fontSize="lg">Web</Text>
            </ListItem>

            <ListItem
              fontSize="md"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Meta>Stack</Meta>
              <Text fontSize="lg">
                React Js, Node Js, Sequelize, PostegreSQL, Typescript e Docker.
              </Text>
            </ListItem>
          </List>

          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/ggstore2.png"
            alt=""
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/ggstore3.png"
            alt=""
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/ggstore4.png"
            alt=""
            mb={4}
          />
        </Container>
      </PageTransition>
    </>
  );
};

export default GGstore;
