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

const Airbnb = () => {
  return (
    <>
      <Head>
        <title>Filipe Dias | Marketspace</title>
      </Head>
      <PageTransition>
        <Container as="main" maxW="80%">
          <MainCard title="Market" greenTitle="space" />
          <Box mt={6}>
            <Text
              fontWeight="normal"
              fontSize="lg"
              textIndent="2em"
              textAlign="justify"
            >
              O app marketspace é um aplicativo mobile Android e iOS que permite
              você comprar novos produtos e vender os seus. Nele você conta com
              um perfil e sua área de produtos cadastrados, podendo desativar,
              editar, remover e adicionar novos produtos. Caso queira comprar um
              produto, você escolhe ou filtra e entra em contato com o vendedor.
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
                href="https://github.com/FilipeDiasLima/marketspace"
              >
                <Text
                  textDecoration="underline"
                  textUnderlineOffset={4}
                  fontSize="lg"
                  textDecorationColor="green.main"
                >
                  Marketspace github
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
              <Text fontSize="lg">iOS e Android</Text>
            </ListItem>

            <ListItem
              fontSize="md"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Meta>Stack</Meta>
              <Text fontSize="lg">
                React Native, Expo, Native Base, NodeJs e Typescript.
              </Text>
            </ListItem>
          </List>

          <SimpleGrid columns={[2]} gap={4} mt={6}>
            <Image
              src="/images/projects/mark1.png"
              objectFit="cover"
              maxW={[120, 140, 240]}
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
            <Image
              objectFit="cover"
              maxW={[120, 140, 240]}
              src="/images/projects/mark2.png"
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
            <Image
              src="/images/projects/mark3.png"
              objectFit="cover"
              maxW={[120, 140, 240]}
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
            <Image
              objectFit="cover"
              maxW={[120, 140, 240]}
              src="/images/projects/mark4.png"
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
            <Image
              objectFit="cover"
              maxW={[120, 140, 240]}
              src="/images/projects/mark5.png"
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
            <Image
              objectFit="cover"
              maxW={[120, 140, 240]}
              src="/images/projects/mark6.png"
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

export default Airbnb;
