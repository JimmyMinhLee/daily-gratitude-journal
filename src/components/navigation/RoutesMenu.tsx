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
import { ThemeToggleButton } from "./ThemeToggleButton";

export const RoutesMenu = () => {
  return (
    <Box ml={2} display={{ base: "inline-block" }}>
      <Menu isLazy id="navbar-menu">
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Options"
        />
        <MenuList>
          <MenuItem as={Link} href="/submit">
            write a gratitude
          </MenuItem>
          <MenuItem as={Link} href="/gratitudes">
            my gratitudes
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
