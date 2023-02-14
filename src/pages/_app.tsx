import { Box, ChakraProvider, Container, Img } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
// import Image from "next/image";

import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import VoxelRoomLoader from "@/components/RoomVoxelLoader";
import { theme } from "@/theme";

import MainImage from "../assets/main.jpg";
import { ProjectCardStyle } from "@/components/Cards/ProjectCard";

const ModelVoxelRoom = dynamic(() => import("../components/RoomVoxel"), {
  ssr: false,
  loading: () => <VoxelRoomLoader />,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Box
        position="relative"
        backgroundImage="url('/images/main2.jpg')"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        w="100%"
        mt={14}
        mb={["-10px", "-40px", "-70px"]}
        h={[180, 280, 340]}
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
