import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      opacity={0.4}
      fontSize="sm"
      pt={10}
    >
      &copy; {new Date().getFullYear()} Filipe Dias. Todos os direitos
      reservados.
    </Box>
  );
};

export default Footer;
