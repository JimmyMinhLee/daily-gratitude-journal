"use client";

import { Link } from "@chakra-ui/next-js";
import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import React from "react";

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
      <Stack pt={2} direction="row" justifyContent="center">
        <Link href="/sign-in">
          <Button>sign in</Button>
        </Link>
        <Link href="/sign-up">
          <Button>sign up</Button>
        </Link>
      </Stack>
    </Stack>
  );
}
