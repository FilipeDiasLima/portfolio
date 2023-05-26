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
        <title>Filipe Dias | Airbnb</title>
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
              O projeto foi desenvolvido a partir de uma vídeo aula do canal
              Code with Antonio no Youtube, nele é ensinado a nova forma de
              produção com Next 13, versão que mudou muita coisa no conceito de
              frontend. Também é ensinado como usar o Next Auth para
              autenticação dentro do frontend, tanto por formulário quanto por
              outras redes, como Google e Github. Usamos o Prisma como um
              construtor de banco de dados. A propria API que a plataforma usa
              foi feita dentro do NextJs.
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
                href="https://www.linkedin.com/posts/filipediaslima_react-reactjs-nextjs-activity-7064789062980636672-04Os?utm_source=share&utm_medium=member_desktop"
              >
                <Text
                  textDecoration="underline"
                  textUnderlineOffset={4}
                  fontSize="lg"
                  textDecorationColor="green.main"
                >
                  Airbnb linkedin
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
                NextJs 13, Prisma DB, TailwindCss, Next Auth e Typescript.
              </Text>
            </ListItem>
          </List>

          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/airbnb4.png"
            alt=""
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/airbnb2.png"
            alt=""
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/airbnb3.png"
            alt=""
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/airbnb1.png"
            alt=""
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/airbnb5.png"
            alt=""
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="full"
            src="/images/projects/airbnb6.png"
            alt=""
            mb={4}
          />
        </Container>
      </PageTransition>
    </>
  );
};

export default Airbnb;
