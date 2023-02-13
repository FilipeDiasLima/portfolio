import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    green: {
      main: "#2FD17A",
      sec: "#43ba7ac0",
    },
    gray: {
      background: "#2A2A2A",
      font: "#262626",
      card: "#353535",
      lightCard: "#EAEAEA",
      border: "#606060",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Jaldi",
    body: "Jaldi",
  },
  styles: {
    global: (props: Record<string, any> | StyleFunctionProps) => ({
      body: {
        bg: mode("#EAEAEA", "#202023")(props),
        color: mode("#262626", "#FFFFFF")(props),
      },
    }),
  },
});
