import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    xs: "290px",
    sm: "390px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
  },
  colors: {
    blue: {
      "100": "#0086AE",
      "200": "#04B6ED",
    },
    gray: {
      "100": "#252525",
      "200": "#363636",
    },
    white: {
      "100": "#FFF",
    },
  },
  fonts: {
    heading: "Encode Sans",
    body: "Encode Sans",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.50",
      },
    },
  },
});
