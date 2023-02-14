import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ChakraDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

export const DivTransition = ({ children }: Props) => {
  return (
    <ChakraDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      mb={6}
    >
      {children}
    </ChakraDiv>
  );
};
