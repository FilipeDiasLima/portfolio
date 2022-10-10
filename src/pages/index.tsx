import { Button, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { BackgroundPage } from "../components/BackgroundPage";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";
import { useRouter } from "next/router";
import Head from "next/head";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Filipe Dias</title>
      </Head>
      <BackgroundPage
        w="100vw"
        minH="100vh"
        align="center"
        justify="center"
        px={{
          xs: "10%",
          sm: "10%",
          md: "12%",
        }}
      >
        <Flex
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          }}
          align="center"
          w="100%"
          justify={{
            xs: "center",
            sm: "center",
            md: "space-between",
          }}
          mt="20"
        >
          <Flex
            direction="column"
            mt={{
              sm: "5",
              md: "0",
            }}
          >
            <Stack spacing="4">
              <Text
                as="b"
                fontSize={["2xl", "3xl", "3xl", "3xl", "4xl"]}
                textAlign={{
                  xs: "center",
                  sm: "center",
                  md: "start",
                }}
              >
                Filipe Dias
              </Text>
              <Text
                as="b"
                fontSize={["lg", "xl", "xl", "xl", "2xl"]}
                textAlign={{
                  xs: "center",
                  sm: "center",
                  md: "start",
                }}
              >
                Desenvolvedor
              </Text>
              <Text
                as="p"
                fontSize={["md", "lg"]}
                maxW={["100%", "300px", "400px", "500px", "600px"]}
                textAlign="justify"
              >
                Olá, sou um desenvolvedor fullstack javascript e typescript.
                Trabalho com ReactJs e NextJs para Web, NodeJs para backend e
                React Native para mobile e bancos relacionais e não relacionais.
              </Text>
            </Stack>
          </Flex>

          <Image
            src="/images/me.jfif"
            boxSize={["180px", "180px", "200px", "200px", "300px"]}
            borderRadius={["20", "30"]}
            border="4px"
            borderColor="blue.100"
          />
        </Flex>

        <Stack
          spacing={{
            xs: 7,
            md: 20,
          }}
          direction={{
            xs: "column",
            md: "row",
          }}
          alignSelf={{
            xs: "center",
            md: "flex-start",
          }}
          mt="10"
          w="100%"
        >
          <Button
            leftIcon={<Icon as={BsGrid1X2} />}
            bg="blue.100"
            size="lg"
            fontWeight="normal"
            _hover={{
              bg: "blue.200",
            }}
            onClick={() => router.push("/projects")}
          >
            Projetos
          </Button>
          <Button
            leftIcon={<Icon as={AiOutlineUser} />}
            onClick={() => router.push("/about-me")}
            bg="blue.100"
            size="lg"
            fontWeight="normal"
            _hover={{
              bg: "blue.200",
            }}
          >
            Sobre mim
          </Button>
          <Button
            leftIcon={<Icon as={RiContactsLine} />}
            bg="blue.100"
            size="lg"
            fontWeight="normal"
            _hover={{
              bg: "blue.200",
            }}
            onClick={() => router.push("/contact")}
          >
            Contatos
          </Button>
        </Stack>
      </BackgroundPage>
    </>
  );
};

export default Home;
