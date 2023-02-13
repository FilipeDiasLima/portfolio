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
              description="Este projeto foi desenvolvido para ser uma loja online de jogos virtuais, a loja se baseia na venda de keys dos jogos disponíveis. Conta com um administrado para cadastrar novos produtos com imagens e descrição e conta com um usuário comum, que será o comprador."
              image="ggstore.svg"
              url="/ggstore"
            />
            <ProjectCard
              title="IgniteGym"
              description="Este projeto foi desenvolvido para ser uma loja online de jogos virtuais, a loja se baseia na venda de keys dos jogos disponíveis. Conta com um administrado para cadastrar novos produtos com imagens e descrição e conta com um usuário comum, que será o comprador."
              image="ignitegym.svg"
              url="/ignitegym"
            />
            <ProjectCard
              title="Simple Note"
              description="Este projeto foi desenvolvido para ser uma loja online de jogos virtuais, a loja se baseia na venda de keys dos jogos disponíveis. Conta com um administrado para cadastrar novos produtos com imagens e descrição e conta com um usuário comum, que será o comprador."
              image="simplenote.svg"
              url="/simplenote"
            />
            <ProjectCard
              title="Typing Text"
              description="Este projeto foi desenvolvido para ser uma loja online de jogos virtuais, a loja se baseia na venda de keys dos jogos disponíveis. Conta com um administrado para cadastrar novos produtos com imagens e descrição e conta com um usuário comum, que será o comprador."
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
