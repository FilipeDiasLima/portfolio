import { MainCard } from "@/components/Cards/MainCard";
import { HeaderTopic } from "@/components/HeaderTopic";
import { PageTransition } from "@/components/PageTransition";
import { Profile } from "@/components/Profile";
import {
  Box,
  Container,
  HStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaChevronRight,
} from "react-icons/fa";
import Head from "next/head";
import Router from "next/router";

export default function Home() {
  return (
    <>
      <Head>
        <title>Filipe Dias | Home</title>
      </Head>
      <PageTransition>
        <Container as="main" maxW="80%">
          <MainCard
            title="Olá, sou um"
            greenTitle="desenvolvedor mobile e web"
          />
          <Profile />

          <Box mt={6}>
            <HeaderTopic title="Eu" />
            <Text
              textIndent="2em"
              as="p"
              fontSize="lg"
              fontWeight="normal"
              textAlign="justify"
            >
              Sou um desenvolvedor full-stack javascript e typescript e as vezes
              freelancer, moro em Manaus - AM. Conheci a programação na
              faculdade em 2018, usando Haskell, C, C++, Python entre outras e
              iniciei na área JS em Abril de 2020, estudando enquanto a
              faculdade estava parada por conta da pandemia. Logo em Outubro do
              mesmo ano, consegui um estágio e atuei em uma empresa Júnior da
              UFAM, a partir daí passei por outros trabalhos e projetos. Gosto
              de fazer meus trabalhos com carinho e capricho, sempre focado em
              aprender e melhorar meus conhecimentos.
            </Text>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            my={4}
          >
            <Button
              alignSelf="center"
              bg={"green.sec"}
              size="md"
              fontWeight="normal"
              fontSize="lg"
              rightIcon={<FaChevronRight fontSize={12} />}
              color={useColorModeValue("gray.font", "white")}
              _hover={{
                bg: "green.main",
              }}
              onClick={() => Router.push("/projects")}
            >
              Projetos
            </Button>
          </Box>

          <Box mt={6}>
            <HeaderTopic title="Experiências" />

            <Box fontWeight="normal" mt={1} fontSize="lg">
              <Text as="strong" fontSize="lg" mr={6}>
                2020 - 2021
              </Text>
              Coltech
            </Box>
            <Box fontWeight="normal" mt={1} fontSize="lg">
              <Text as="strong" fontSize="lg" mr={6}>
                2020 - 2021
              </Text>
              Estágio na Eu Vô
            </Box>
            <Box fontWeight="normal" mt={1} fontSize="lg">
              <Text as="strong" fontSize="lg" mr={6}>
                2018 até hoje
              </Text>
              Ciência da Computação na Universidade Federal do Amazonas (UFAM)
            </Box>
            <Box fontWeight="normal" mt={1} fontSize="lg">
              <Text as="strong" fontSize="lg" mr={6}>
                2021 - Atualmente
              </Text>
              Desenvolvedor Full-Stack na Tarkuss Brasil
            </Box>
          </Box>

          <Box mt={6}>
            <HeaderTopic title="Contatos" />
            <List spacing={2}>
              <ListItem>
                <a
                  href="https://github.com/filipediaslima"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    bg={"green.sec"}
                    size="sm"
                    fontSize="lg"
                    py={5}
                    fontWeight="normal"
                    leftIcon={<FaGithub />}
                    color={useColorModeValue("gray.font", "white")}
                    _hover={{
                      bg: "green.main",
                    }}
                  >
                    @filipediaslima
                  </Button>
                </a>
              </ListItem>

              <ListItem>
                <a
                  href="https://linkedin.com/in/filipediaslima"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    bg={"green.sec"}
                    size="sm"
                    fontSize="lg"
                    py={5}
                    fontWeight="normal"
                    leftIcon={<FaLinkedinIn />}
                    color={useColorModeValue("gray.font", "white")}
                    _hover={{
                      bg: "green.main",
                    }}
                  >
                    @filipediaslima
                  </Button>
                </a>
              </ListItem>

              <ListItem>
                <a
                  href="https://www.instagram.com/filipe.diaslima/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    bg={"green.sec"}
                    size="sm"
                    fontSize="lg"
                    py={5}
                    fontWeight="normal"
                    leftIcon={<FaInstagram />}
                    color={useColorModeValue("gray.font", "white")}
                    _hover={{
                      bg: "green.main",
                    }}
                  >
                    @filipe.diaslima
                  </Button>
                </a>
              </ListItem>
            </List>
          </Box>

          <Box mt={6}>
            <HeaderTopic title="Hobbies" />
            <Text as="p" fontSize="lg" fontWeight="normal" textAlign="justify">
              Jogar e sair com meus amigos, assistir filmes, treinar durante a
              semana e aprender coisas novas.
            </Text>
          </Box>
        </Container>
      </PageTransition>
    </>
  );
}
