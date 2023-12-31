import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Container, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import { PageTitle } from "@/components/PageTitle";

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
              <Stack align="center" spacing={{ base: 8, md: 10 }}>
                <PageTitle />
                <Text>
                  a place to document all the things you're grateful for.
                </Text>

                <Divider />
                <Container size="2xl"> {children} </Container>
              </Stack>
            </Flex>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
