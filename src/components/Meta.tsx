import { Badge } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Meta = ({ children }: Props) => (
  <Badge colorScheme="green" mr={2} fontSize="xs">
    {children}
  </Badge>
);
