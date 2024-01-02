"use client";

import { Animate } from "@/components/shared/Animate";
import Paragraph from "@/components/shared/styled/Paragraph";
import { Stack, Heading } from "@chakra-ui/react";
export default function About() {
  return (
    <Stack direction="column">
      <Animate delay={0.2}>
        <Heading variant="section-title">why?</Heading>
        <Paragraph>
          expressing gratitude is fun. taking a moment out of your day to pause
          and collect your thoughts on everything that makes you happy or joyful
          is a great way to slow down your pace and appreciate all the little
          things that life has to offer. unfortunately, there isn't a place
          online for you to do so, and while writing things down on pen and
          paper will always be available, it can be cumbersome. this website
          aims to be the one place for you to be able to document your
          gratitudes, whether that's while you're on the go and want to quickly
          jot something down with your phone, or on a friday evening where
          you're at your desk & scrolling on your laptop.
        </Paragraph>
      </Animate>

      <Animate delay={0.3}>
        <Heading variant="section-title">what's to come?</Heading>
        <Paragraph>
          while i have a lot of ideas to bring to life on this little pocket of
          the internet, i have a laundry list of other things that i'd like to
          do first. primarily, this was just a silly project to better
          understand the web technologies used to build it. if the usage is
          there, though, i'd love to pick it up a little more seriously and to
          bring it to complete maturity.
        </Paragraph>
      </Animate>
    </Stack>
  );
}
