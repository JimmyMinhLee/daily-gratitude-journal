"use client";
import { Link } from "@chakra-ui/next-js";
import { Heading } from "@chakra-ui/react";

export const Title = () => {
  return (
    <Link href="/">
      <Heading mt={20} variant="page-title">
        daily gratitudes
      </Heading>
    </Link>
  );
};
