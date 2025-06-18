import { MainCard } from "@/components/Cards/MainCard";
import { Meta } from "@/components/Meta";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Container, Image, List, ListItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

const Airbnb = () => {
  return (
    <>
      <Head>
        <title>Filipe Dias | Balatro</title>
      </Head>
      <PageTransition>
        <Container as="main" maxW="80%">
          <MainCard title="Plataforma" greenTitle="Airbnb" />
          <Box mt={6}>
            <Text
              fontWeight="normal"
              fontSize="lg"
              textIndent="2em"
              textAlign="justify"
            >
              Este projeto é uma **recriação do jogo Balatro** para a web, feito
              como desafio pessoal e homenagem ao jogo original.
            </Text>
            <Text
              fontWeight="normal"
              fontSize="lg"
              textIndent="2em"
              textAlign="justify"
            >
              Balatro é um jogo viciante e criativo que mistura elementos e
              regras do pôquer com mecânicas únicas e surpreendentes. Depois de
              vê-lo indicado no The Game Awards, resolvi comprar e me apaixonei
              pela proposta. Por gostar tanto, decidi me desafiar e recriá-lo
              usando tecnologias web.{" "}
            </Text>
          </Box>
          <List ml={[0, 0, 4]} my={4} spacing={1}>
            <ListItem
              fontSize="md"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Meta>Jogo</Meta>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://balatro-filipe.vercel.app/"
              >
                <Text
                  textDecoration="underline"
                  textUnderlineOffset={4}
                  fontSize="lg"
                  textDecorationColor="green.main"
                >
                  Quero jogar
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
              <Meta>Post</Meta>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/filipediaslima/"
              >
                <Text
                  textDecoration="underline"
                  textUnderlineOffset={4}
                  fontSize="lg"
                  textDecorationColor="green.main"
                >
                  Balatro linkedin
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
              <Meta>Post</Meta>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FilipeDiasLima/balatro"
              >
                <Text
                  textDecoration="underline"
                  textUnderlineOffset={4}
                  fontSize="lg"
                  textDecorationColor="green.main"
                >
                  Balatro github
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
                NextJs 15, TailwindCss, ThreeJs, Motion e Typescript.
              </Text>
            </ListItem>
          </List>

          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/balatro_in_game.png"
            alt=""
            mb={4}
          />
        </Container>
      </PageTransition>
    </>
  );
};

export default Airbnb;
