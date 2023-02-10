import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { NavBar } from "@/components/NavBar";
import { theme } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  console.log(theme.initialColorMode);
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
