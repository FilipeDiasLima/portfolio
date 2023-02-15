import { Box, ChakraProvider, Container, Image } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
// import Image from "next/image";

import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import VoxelRoomLoader from "@/components/RoomVoxelLoader";
import { theme } from "@/theme";

import { ProjectCardStyle } from "@/components/Cards/ProjectCard";

const ModelVoxelRoom = dynamic(() => import("../components/RoomVoxel"), {
  ssr: false,
  loading: () => <VoxelRoomLoader />,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Image
        src="/images/main2.jpg"
        objectPosition="center"
        objectFit="cover"
        w="100%"
        mt={14}
        mb={["-90px", "-80px", "-70px"]}
        h={[140, 180, 340]}
      />
      <Container maxW="container.md" pt={14} as="main" pb={8}>
        {/* <ModelVoxelRoom /> */}
        <ProjectCardStyle />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}
