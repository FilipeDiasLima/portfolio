import Head from "next/head";
import { BackgroundPage } from "../../components/BackgroundPage";
import { CardProject } from "../../components/CardProject";
import { projectsData } from "../../utils/projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Filipe Dias | Projetos</title>
      </Head>
      <BackgroundPage
        showHeader={true}
        align="center"
        justify="center"
        w="100vw"
        minH="100vh"
        py={{
          xs: 10,
          sm: 10,
          lg: 0,
        }}
        px={{
          xs: "10%",
          md: "12%",
        }}
        flexDir={{
          xs: "column",
          md: "row",
        }}
        justifyContent={"space-evenly"}
      >
        {projectsData.map((project) => (
          <CardProject
            key={project.id}
            imgSrc={project.imgSrc}
            title={project.title}
            tech1={project.tech1}
            tech2={project.tech2}
            tech3={project.tech3}
            tech4={project.tech4}
            path={"/projects" + project.path}
          />
        ))}
      </BackgroundPage>
    </>
  );
}
