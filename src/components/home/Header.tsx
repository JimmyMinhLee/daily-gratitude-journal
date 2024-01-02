"use client";

import { Divider, Stack, Text } from "@chakra-ui/react";
import { Title } from "@/components/home/Title";

export default function Header() {
  return (
    <Stack align="center" spacing={{ base: 8, md: 10 }}>
      <Title />
      <Text
        display={{ base: "none", sm: "inline-block" }}
        justifyItems="center"
      >
        a place to document all the things you're grateful for.
      </Text>
      <Text
        display={{ base: "inline-block", sm: "none" }}
        justifyItems="center"
      >
        a place to document gratitudes.
      </Text>
      <Divider />
    </Stack>
  );
}
