import { Box } from "@chakra-ui/react";

interface Props {
  src1: string;
  src2: string;
  src3: string;
  isApp: boolean;
}

export const TopImagesProject = ({ isApp, src1, src2, src3 }: Props) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir="row"
      w="100%"
    >
      <Box
        filter="auto"
        brightness="40%"
        w={!isApp ? "490px" : "190px"}
        h={!isApp ? "255px" : "400px"}
        borderRadius={"20"}
        bgImage={`url(${src1})`}
        bgPosition="center"
        bgSize="cover"
        position="absolute"
        right={!isApp ? "15%" : "35%"}
      />
      <Box
        bgImage={`url(${src2})`}
        bgPosition="center"
        bgSize="cover"
        w={!isApp ? "530px" : "210px"}
        h={!isApp ? "290px" : "430px"}
        borderRadius={"20"}
        zIndex={"2"}
      />
      <Box
        filter="auto"
        brightness="40%"
        w={!isApp ? "490px" : "190px"}
        h={!isApp ? "255px" : "400px"}
        borderRadius={"20"}
        bgImage={`url(${src3})`}
        bgPosition="center"
        bgSize="cover"
        position="absolute"
        left={!isApp ? "15%" : "35%"}
      />
    </Box>
  );
};
