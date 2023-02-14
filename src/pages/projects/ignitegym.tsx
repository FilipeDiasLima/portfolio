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

const IgniteGym = () => {
  return (
    <>
      <Head>
        <title>Filipe Dias | IgniteGym</title>
      </Head>
      <PageTransition>
        <Container as="main">
          <MainCard title="Ignite" greenTitle="Gym" />
          <Box mt={6}>
            <Text
              fontWeight="normal"
              fontSize="sm"
              textIndent="2em"
              textAlign="justify"
            >
              Seu app para treinar na academia, programe seu treino da semana da
              melhor forma possível. Você personaliza o seu cronograma de treino
              da sua maneira e é registrado em histórico todo o seu progresso.
            </Text>
          </Box>
          <List ml={4} my={4} spacing={1}>
            <ListItem
              fontSize="sm"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              <Meta>Post</Meta>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/posts/filipediaslima_react-reactnative-rocketseat-activity-7025477756087844864--e0_?utm_source=share&utm_medium=member_desktop"
              >
                <Text
                  textDecoration="underline"
                  textUnderlineOffset={4}
                  textDecorationColor="green.main"
                >
                  IgniteGym linkedin
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
                React Native, Expo, Native Base, NodeJS, Sqlite3 e Typescript
              </Text>
            </ListItem>
          </List>

          <SimpleGrid columns={[2]} gap={4} mt={6}>
            <Image
              src="/images/projects/ignite1.png"
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
              src="/images/projects/ignite2.png"
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
            <Image
              src="/images/projects/ignite3.png"
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
              src="/images/projects/ignite4.png"
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
            <Image
              objectFit="cover"
              maxW={[140, 200]}
              src="/images/projects/ignite5.png"
              alt=""
              mb={4}
              bg="transparent"
              shadow="lg"
            />
            <Image
              objectFit="cover"
              maxW={[140, 200]}
              src="/images/projects/ignite6.png"
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

export default IgniteGym;
