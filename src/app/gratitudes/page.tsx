"use client";

import { GratitudeSection } from "@/components/Gratitude/GratitudeSection";
import { Stack } from "@chakra-ui/react";

export default function Gratitudes() {
  const gratitudesOne = [
    "today i'm happy for my dog",
    "i really enjoyed the smell of the roses today",
    "i'm happy that my mom said she loved me this morning",
  ];
  const gratitudesTwo = [
    "i'm happy i woke up today",
    "i'm happy that my presentation went okay",
    `i'm grateful that i'm able to wake up and breathe and have food on my table. this is going to be,
    an extremely long gratitude post because i'd like to see what happens and how this looks when i,
    include a lot of things. hopefully it's not too bad and i don't have to edit the way that,
    this is rendered.`,
  ];

  return (
    <Stack justifyContent="center">
      <GratitudeSection date="january 2nd, 2023" gratitudes={gratitudesTwo} />
      <GratitudeSection date="january 1st, 2023" gratitudes={gratitudesOne} />
    </Stack>
  );
}
