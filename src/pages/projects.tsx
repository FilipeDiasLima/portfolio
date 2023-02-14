import { MainCard } from "@/components/Cards/MainCard";
import { ProjectCard } from "@/components/Cards/ProjectCard";
import { DivTransition } from "@/components/DivTransition";
import { PageTransition } from "@/components/PageTransition";
import { Container, SimpleGrid } from "@chakra-ui/layout";
import Head from "next/head";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Filipe Dias | Projetos</title>
      </Head>
      <PageTransition>
        <Container as="main">
          <MainCard title="Alguns dos meus" greenTitle="projetos" />

          <SimpleGrid columns={[1, 1, 2]} gap={4} mt={6}>
            <ProjectCard
              title="GGstore"
              description="Este projeto foi desenvolvido para ser uma loja online de jogos virtuais, a loja se baseia na venda de keys dos jogos disponíveis."
              image="ggstore.svg"
              url="/ggstore"
            />
            <ProjectCard
              title="IgniteGym"
              description="Um app para você montar seu treino diário, escolhendo o dia, os exercícios e suas séries."
              image="ignitegym.svg"
              url="/ignitegym"
            />
            <ProjectCard
              title="Simple Note"
              description="Este app ajuda você a fazer suas anotações de forma simles e bonita. App simples e agradável para estudos."
              image="simplenote.svg"
              url="/simplenote"
            />
            <ProjectCard
              title="Typing Text"
              description="Essa aplicação web testa sua capacidade de digitação/datilografia. Você escolhe o idioma e começa a escrever as palvras que são sorteadas para você."
              image="tt.svg"
              url="/tt"
            />
          </SimpleGrid>
        </Container>
      </PageTransition>
    </>
  );
};

export default Projects;
