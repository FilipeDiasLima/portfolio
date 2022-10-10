import { Box, Image, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { BackgroundPage } from "../components/BackgroundPage";
import styles from "../styles/contact.module.css";

export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText("filipdiasdelima@gmail.com");
  };

  return (
    <>
      <Head>
        <title>Filipe Dias | Contatos</title>
      </Head>
      <BackgroundPage
        showHeader={true}
        align="center"
        justify="center"
        px={{
          xs: "10%",
          md: "12%",
        }}
        w="100vw"
        minH="100vh"
        flexDir={{
          xs: "column",
          md: "row",
        }}
      >
        <NextLink href="https://www.linkedin.com/in/filipediaslima/" passHref>
          <Link target="_blank" rel="noopener noreferrer">
            <Box
              ml={{ xs: "0", md: "3" }}
              mt={{ xs: "3", md: "0" }}
              className={styles.cardContact}
              w={{
                xs: "100px",
                md: "140px",
              }}
              h={{
                xs: "100px",
                md: "140px",
              }}
              borderWidth="2px"
              borderRadius="2xl"
              overflow="hidden"
              bg="#0A66C2"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src="/images/linkedin.png"
                w="100%"
                className={styles.image}
              />
              <Text
                as="b"
                className={styles.text}
                opacity="0"
                fontSize="xl"
                position={"absolute"}
              >
                Abrir
              </Text>
            </Box>
          </Link>
        </NextLink>

        <NextLink href="https://www.instagram.com/filipe.diaslima/" passHref>
          <Link target="_blank" rel="noopener noreferrer">
            <Box
              ml={{ xs: "0", md: "3" }}
              mt={{ xs: "3", md: "0" }}
              className={styles.cardContact}
              w={{
                xs: "100px",
                md: "140px",
              }}
              h={{
                xs: "100px",
                md: "140px",
              }}
              borderWidth="2px"
              borderRadius="2xl"
              overflow="hidden"
              bgGradient="linear(223.99deg, #BB00AC 0%, #F30105 49.48%, #FEC61E 100%);"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src="/images/instagram.png"
                w="100%"
                className={styles.image}
              />
              <Text
                as="b"
                className={styles.text}
                opacity="0"
                fontSize="xl"
                position={"absolute"}
              >
                Abrir
              </Text>
            </Box>
          </Link>
        </NextLink>

        <Link onClick={copyEmail}>
          <Box
            ml={{ xs: "0", md: "3" }}
            mt={{ xs: "3", md: "0" }}
            className={styles.cardContact}
            w={{
              xs: "100px",
              md: "140px",
            }}
            h={{
              xs: "100px",
              md: "140px",
            }}
            borderWidth="2px"
            borderRadius="2xl"
            overflow="hidden"
            bg="#FFF"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src="/images/gmail.png" w="80%" className={styles.image} />
            <Text
              as="b"
              className={styles.text}
              opacity="0"
              fontSize={["sm", "xl"]}
              position={"absolute"}
              color="gray.100"
            >
              Copiar e-mail
            </Text>
          </Box>
        </Link>

        <NextLink href="https://github.com/FilipeDiasLima" passHref>
          <Link target="_blank" rel="noopener noreferrer">
            <Box
              ml={{ xs: "0", md: "3" }}
              mt={{ xs: "3", md: "0" }}
              className={styles.cardContact}
              w={{
                xs: "100px",
                md: "140px",
              }}
              h={{
                xs: "100px",
                md: "140px",
              }}
              borderWidth="2px"
              borderRadius="2xl"
              overflow="hidden"
              bg="#FFF"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src="/images/github.png"
                w="80%"
                className={styles.image}
              />
              <Text
                as="b"
                className={styles.text}
                opacity="0"
                fontSize="xl"
                color="gray.100"
                position={"absolute"}
              >
                Abrir
              </Text>
            </Box>
          </Link>
        </NextLink>
      </BackgroundPage>
    </>
  );
}
