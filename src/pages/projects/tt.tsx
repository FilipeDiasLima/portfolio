import { MainCard } from "@/components/Cards/MainCard";
import { Meta } from "@/components/Meta";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Container, Image, List, ListItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

const TT = () => {
  return (
    <>
      <Head>
        <title>Filipe Dias | TypingText</title>
      </Head>
      <PageTransition>
        <Container as="main" maxW="80%">
          <MainCard title="Typing" greenTitle="Text" />
          <Box mt={6}>
            <Text
              fontWeight="normal"
              fontSize="lg"
              textIndent="2em"
              textAlign="justify"
            >
              Este projeto se trata de uma plataforma que mede suas habilidades
              de digitação no seu teclado, tanto mobile quanto físico. Você terá
              uma quantidade de palavras que deveram ser escritas corretamento
              por você, após finilizar, a plataforma irá calcular algumas
              métricas, como quantas palavras você digita por segundo, quantos
              acerto, entre outras. No menu é possível alterar o tema do site
              entre WHITE e PINK, altera o idioma entre português e inglês e ver
              suas pontuações. O código e as tecnologias do projeto estão no meu
              repositório do github, o link está ao final desta página.
            </Text>
          </Box>
          <List ml={[0, 0, 4]} my={4} spacing={1}>
            <ListItem
              fontSize="md"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Meta>Projeto</Meta>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FilipeDiasLima/TypingTest"
              >
                <Text
                  textDecoration="underline"
                  textUnderlineOffset={4}
                  fontSize="lg"
                  textDecorationColor="green.main"
                >
                  TypingText github
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
              <Text fontSize="lg">Typescript, React, Cookie, ChartJS</Text>
            </ListItem>
          </List>

          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/tt1.png"
            alt=""
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/tt2.png"
            alt=""
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/tt3.png"
            alt=""
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/tt5.png"
            alt=""
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/tt6.png"
            alt=""
            mb={4}
          />
        </Container>
      </PageTransition>
    </>
  );
};

export default TT;
