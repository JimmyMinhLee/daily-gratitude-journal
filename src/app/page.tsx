"use client";

import Paragraph from "@/styled/Paragraph";
import { Button, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Stack direction="column">
        <Heading
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          variant="section-title"
          justifyContent="left"
          m={0}
        >
          what is this?
        </Heading>
        <Paragraph>
          i haven't been able to find a place to put your daily gratitudes
          online. so, i decided to build one. to get started, create an account.
          then submit one.
        </Paragraph>
        <Heading variant="section-subtitle">how can i get started?</Heading>
        <Stack direction="row" justifyContent="left">
          <Button leftIcon={<FaGithub />}> github </Button>
          <Button leftIcon={<FaFacebook />}> facebook </Button>
        </Stack>
      </Stack>
    </>
  );
}
