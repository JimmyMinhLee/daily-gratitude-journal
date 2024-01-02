"use client";

import { Animate } from "@/components/Animate";
import { Link } from "@chakra-ui/next-js";
import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Stack direction="column">
      <Animate delay={0.4}>
        <Center pb={4}>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            variant="section-title"
            m={0}
          >
            get started
          </Heading>
        </Center>
        <Stack pt={2} direction="row" justifyContent="center">
          <Link href="/submit">
            <Button>write a gratitude</Button>
          </Link>
          <Link href="/about">
            <Button>learn more</Button>
          </Link>
        </Stack>
      </Animate>
    </Stack>
  );
}
