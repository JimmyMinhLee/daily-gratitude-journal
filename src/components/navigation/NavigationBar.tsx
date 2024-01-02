"use client";

import { Box, Container } from "@chakra-ui/react";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { RoutesMenu } from "./RoutesMenu";

export const NavigationBar = () => {
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
          <RoutesMenu />
        </Box>
      </Container>
    </Box>
  );
};
