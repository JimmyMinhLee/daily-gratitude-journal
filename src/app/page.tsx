"use client";

import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <Stack direction="column">
      <Center>
        <Heading
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          variant="section-title"
          m={0}
        >
          get started
        </Heading>
      </Center>
      <Stack direction="row" justifyContent="center">
        <Button leftIcon={<FaGithub />}> github </Button>
        <Button leftIcon={<FaFacebook />}> facebook </Button>
      </Stack>
    </Stack>
  );
}
