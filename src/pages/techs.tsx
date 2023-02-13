import { MainCard } from "@/components/Cards/MainCard";
import { DivTransition } from "@/components/DivTransition";
import { PageTransition } from "@/components/PageTransition";
import { Container } from "@chakra-ui/layout";
import Head from "next/head";

const Techs = () => {
  return (
    <>
      <Head>
        <title>Filipe Dias | Minhas Techs</title>
      </Head>
      <PageTransition>
        <Container as="main">
          <MainCard
            title="Meus projetos são feitos com essas"
            greenTitle="techs"
          />
          <h1>Techs</h1>
        </Container>
      </PageTransition>
    </>
  );
};

export default Techs;
