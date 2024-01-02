import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import {
  Center,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
  calc,
} from "@chakra-ui/react";
import { PageTitle } from "@/components/PageTitle";
import { NavigationMenu } from "@/components/NavigationMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "daily gratitude journal",
  description: "by jimmyminhlee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Container maxW="4xl">
            <Flex justifyContent="center">
              <NavigationMenu />
              <Stack
                pt="calc(25vh)"
                align="center"
                spacing={{ base: 8, md: 10 }}
              >
                <PageTitle />
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

                <Container size="2xl"> {children} </Container>
              </Stack>
            </Flex>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
