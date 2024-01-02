"use client";

import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Sets the original color mode value used by Chakra
const config = {
  useSystemColorMode: true,
};

const styles = {
  // Sets the background
  global: (props: Object) => ({
    "html, body": {
      background: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const components = {
  Heading: {
    variants: {
      "page-title": {
        marginTop: 3,
        marginBottom: 4,
        fontWeight: 100,
        fontSize: { base: "3xl", sm: "4xl", md: "6xl" },
        lineHeight: "110%",
      },
      "section-title": {
        textDecoration: "underline",
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        fontWeight: 100,
        fontSize: { base: "3xl", sm: "4xl", md: "6xl" },
        lineHeight: "110%",
      },
      "section-subtitle": {
        textDecoration: "underline",
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        fontWeight: 100,
        fontSize: { base: "3xl", sm: "4xl", md: "6xl" },
        lineHeight: "110%",
      },
    },
  },
};

const theme = extendTheme({ config, fonts, styles, components });
export default theme;
