"use client";
import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import Gratitude from "./Gratitude";

export function GratitudeSection({
  date,
  gratitudes,
}: {
  date: string;
  gratitudes: string[];
}) {
  const mappedGratitudes = gratitudes.map((it) => {
    return (
      <ListItem>
        <Gratitude gratitude={it} />
      </ListItem>
    );
  });

  return (
    <>
      <Stack>
        <Heading variant="page-title">{date}</Heading>
        <UnorderedList>{mappedGratitudes}</UnorderedList>
        <Box p={2} />
        <Divider />
      </Stack>
    </>
  );
}
