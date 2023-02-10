import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    green: {
      main: "#2FD17A",
    },
    gray: {
      background: "#2A2A2A",
      card: "#414141",
      border: "#606060",
    },
  },
  fonts: {
    heading: "Jaldi",
    body: "Jaldi",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#F2F2F2", "#202023")(props),
        color: mode("#262626", "#FFFFFF")(props),
      },
    }),
  },
});
