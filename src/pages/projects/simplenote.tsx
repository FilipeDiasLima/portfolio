import { MainCard } from "@/components/Cards/MainCard";
import { Meta } from "@/components/Meta";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

const SimpleNote = () => {
  return (
    <>
      <Head>
        <title>Filipe Dias | SimpleNote</title>
      </Head>
      <PageTransition>
        <Container as="main">
          <MainCard title="Simple" greenTitle="Note" />
          <Box mt={6}>
            <Text
              fontWeight="normal"
              fontSize="sm"
              textIndent="2em"
              textAlign="justify"
            >
              Este projeto se trata de um aplicativo mobile que guarda anotações
              do usuário. É possível criar uma anotação, abrir, deletar e editar
              anotações e procurar pela barra de pesquisa. O app funcionado
              tanto para Android quanto para IOS. O código e as tecnologias do
              projeto estão no meu repositório do github, o link está ao final
              desta página.
            </Text>
          </Box>
          <List ml={4} my={4} spacing={1}>
            <ListItem
              fontSize="sm"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Meta>Projeto</Meta>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FilipeDiasLima/simplenote"
              >
                <Text
                  textDecoration="underline"
                  textUnderlineOffset={4}
                  textDecorationColor="green.main"
                >
                  SimpleNote github
                </Text>
              </Link>
              <ExternalLinkIcon mx="2px" color="green.main" />
            </ListItem>

            <ListItem
              fontSize="sm"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Meta>Plataformas</Meta>
              <Text>iOS e Android</Text>
            </ListItem>

            <ListItem
              fontSize="sm"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Meta>Stack</Meta>
              <Text>
                React Native ,Expo, AsyncStorage, React-Navigation/Stack
              </Text>
            </ListItem>
          </List>

          <SimpleGrid columns={[2]} gap={4} mt={6}>
            <Image
              src="/images/projects/simplenote1.png"
              objectFit="cover"
              maxW={[140, 200]}
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
            <Image
              objectFit="cover"
              maxW={[140, 200]}
              src="/images/projects/simplenote2.png"
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
            <Image
              src="/images/projects/simplenote3.png"
              objectFit="cover"
              maxW={[140, 200]}
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
            <Image
              objectFit="cover"
              maxW={[140, 200]}
              src="/images/projects/simplenote4.png"
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
          </SimpleGrid>
        </Container>
      </PageTransition>
    </>
  );
};

export default SimpleNote;
