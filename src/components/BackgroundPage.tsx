import { Button, Flex, FlexProps, Icon, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface Props extends FlexProps {
  showHeader?: boolean;
  children: ReactNode;
}

export const BackgroundPage = ({ showHeader, children, ...rest }: Props) => {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      backgroundImage="url('/images/background.png')"
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      backgroundSize={["100% 27%", "contain"]}
      {...rest}
    >
      {showHeader && (
        <Flex position={["absolute"]} top="10" left="10">
          <Button
            leftIcon={<FaArrowLeft />}
            colorScheme="blue"
            variant="unstyled"
            display={"flex"}
            ml={{
              sm: 0,
              md: 10,
              xl: 16,
            }}
            onClick={() => router.back()}
          >
            <Text>Voltar</Text>
          </Button>
        </Flex>
      )}
      {children}
    </Flex>
  );
};
