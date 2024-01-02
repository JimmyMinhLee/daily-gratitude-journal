"use client";
import { Animate } from "@/components/Animate";
import Paragraph from "@/styled/Paragraph";
import { Stack, Heading } from "@chakra-ui/react";
export default function About() {
  return (
    <Stack direction="column">
      <Animate delay={0.2}>
        <Heading variant="section-title">why?</Heading>
        <Paragraph>
          the act of being reminded & confronting your gratitudes is connected
          to improved mental health in the face of stress. i could not find a
          place online where you're able to keep track of these gratitudes and
          to journal them. the intention is to provide a platform for doing this
          while you're at your computer, or on your phone.
        </Paragraph>
      </Animate>

      <Animate delay={0.3}>
        <Heading variant="section-title">what's to come?</Heading>
        <Paragraph>
          i have a lot of ideas to implement on this website during my free
          time. currently, it just provides basic functionality for creating
          these gratitudes and plainly viewing them. some improvements are the
          ability to #tag certain gratitudes, and providing a search filter for
          your gratitudes. it'd be fun to implement some scoring per user as
          well.
        </Paragraph>
      </Animate>
    </Stack>
  );
}
