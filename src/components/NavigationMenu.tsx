"use client";

import {
  Menu,
  Box,
  Container,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";

export const NavigationMenu = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      css={{ backdoprFilter: "blur(10px)" }}
      zIndex={2}
      py={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap={"wrap"}
        alignItems="center"
        justifyContent="right"
      >
        <Box alignContent="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={Link} href="/">
                  home
                </MenuItem>
                <MenuItem as={Link} href="/source">
                  about
                </MenuItem>
                <MenuItem as={Link} href="/source">
                  source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
