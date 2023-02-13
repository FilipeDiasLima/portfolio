import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, HStack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useRouter } from "next/router";
import { LinkItem, MainLink } from "./LinkItem";
import { ThemeToggleButton } from "./ThemeToggleButton";

export const NavBar = () => {
  const router = useRouter();

  const handleNavigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <Box
      position="fixed"
      top={0}
      as="nav"
      w="100%"
      zIndex={2}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
    >
      <Container
        display="flex"
        py={2}
        px={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <MainLink href="/" mr={10} />
        <HStack
          display={{ base: "none", sm: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <LinkItem href="/projects">Projetos</LinkItem>
          <LinkItem href="/techs">Techs</LinkItem>
        </HStack>
        <Box alignItems="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                defaultValue={"none"}
                as={IconButton}
                icon={<HamburgerIcon />}
              />
              <MenuList>
                <MenuItem onClick={() => handleNavigateTo("/projects")}>
                  Projetos
                </MenuItem>
                <MenuItem onClick={() => handleNavigateTo("/techs")}>
                  Techs
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
