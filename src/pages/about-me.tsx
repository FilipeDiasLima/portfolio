import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { BackgroundPage } from "../components/BackgroundPage";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Filipe Dias | Sobre mim</title>
      </Head>
      <BackgroundPage
        showHeader={true}
        align="center"
        justify="center"
        px={["10%", "12%"]}
        w="100vw"
        py={{
          xs: 6,
          sm: 6,
          lg: 0,
        }}
        h={{
          xs: "100%",
          sm: "100%",
          lg: "100vh",
        }}
        flexDir={["column"]}
      >
        <Flex
          align={"center"}
          direction={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          mt={{
            xs: "45%",
            sm: "45%",
            md: 0,
          }}
        >
          <Image
            src="/images/me.jfif"
            boxSize={["180px", "180px", "200px", "200px", "260px"]}
            borderRadius={["20", "30"]}
            border="4px"
            borderColor="blue.100"
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            ml={{
              xs: 0,
              sm: 0,
              md: 10,
            }}
            mt={{
              xs: 10,
              sm: 10,
              md: 0,
            }}
            w={"100%"}
            alignItems={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            }}
          >
            <Text as="b" fontSize={20}>
              Filipe Dias
            </Text>
            <Text
              as="p"
              maxW={{
                xs: "100%",
                sm: "100%",
                lg: "60%",
              }}
              mt={4}
            >
              Olá, meu nome é Filipe Dias, nascido em Manaus - AM e sou um
              desenvolvedor fullstack javascript e typescript. Trabalho com
              ReactJs e NextJs para Web, NodeJs para backend e React Native para
              mobile e bancos relacionais e não relacionais. Curso ciência da
              computação na UFAM desde 2018, graduando o 7º periodo, atualmente
              em 2022. Conheci a área javascript em 2020 e foquei meus estudos e
              no mesmo ano consequi atuar na área, passando por uma empresa
              Junior, um estágio e empregos efetivados.
            </Text>
          </Box>
        </Flex>
        <Flex
          mt={20}
          alignItems={{
            xs: "center",
            sm: "center",
            md: "flex-start",
          }}
          direction={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          w={{
            xs: "95%",
            md: "95%",
            lg: "90%",
            xl: "90%",
            "2xl": "80%",
          }}
          justify="space-between"
        >
          <Box
            bg="white.100"
            overflow={"hidden"}
            borderRadius="20"
            w={120}
            h={120}
            border="4px"
            borderColor="blue.100"
            p={1}
          >
            <Image
              src="/images/ufam.webp"
              w="100%"
              h="100%"
              objectFit={"contain"}
            />
          </Box>
          <Box
            bg="white.100"
            mt={{
              xs: 4,
              sm: 4,
              lg: 0,
            }}
            overflow={"hidden"}
            borderRadius="20"
            w={120}
            h={120}
            border="4px"
            borderColor="blue.100"
            p={1}
          >
            <Image
              src="/images/icomp.png"
              w="100%"
              h="100%"
              objectFit={"contain"}
            />
          </Box>
          <Box
            bg="white.100"
            mt={{
              xs: 4,
              sm: 4,
              lg: 0,
            }}
            overflow={"hidden"}
            borderRadius="20"
            w={120}
            h={120}
            border="4px"
            borderColor="blue.100"
            p={1}
          >
            <Image
              src="/images/react.png"
              w="100%"
              h="100%"
              objectFit={"contain"}
            />
          </Box>
          <Box
            bg="white.100"
            mt={{
              xs: 4,
              sm: 4,
              lg: 0,
            }}
            overflow={"hidden"}
            borderRadius="20"
            w={120}
            h={120}
            border="4px"
            borderColor="blue.100"
            p={1}
          >
            <Image
              src="/images/next.png"
              w="100%"
              h="100%"
              objectFit={"contain"}
            />
          </Box>
          <Box
            bg="white.100"
            mt={{
              xs: 4,
              sm: 4,
              lg: 0,
            }}
            overflow={"hidden"}
            borderRadius="20"
            w={120}
            h={120}
            border="4px"
            borderColor="blue.100"
            p={1}
          >
            <Image
              src="/images/node.png"
              w="100%"
              h="100%"
              objectFit={"contain"}
            />
          </Box>
          <Box
            bg="#F7DF1E"
            mt={{
              xs: 4,
              sm: 4,
              lg: 0,
            }}
            overflow={"hidden"}
            borderRadius="20"
            w={120}
            h={120}
            border="4px"
            borderColor="blue.100"
            p={1}
          >
            <Image
              src="/images/javascript.png"
              w="100%"
              h="100%"
              objectFit={"contain"}
            />
          </Box>
          <Box
            bg="#3178C6"
            mt={{
              xs: 4,
              sm: 4,
              lg: 0,
            }}
            overflow={"hidden"}
            borderRadius="20"
            w={120}
            h={120}
            border="4px"
            borderColor="blue.100"
            p={1}
          >
            <Image
              src="/images/typescript.png"
              w="100%"
              h="100%"
              objectFit={"contain"}
            />
          </Box>
        </Flex>
      </BackgroundPage>
    </>
  );
}
