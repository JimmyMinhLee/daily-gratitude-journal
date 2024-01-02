import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Container, Flex, Stack, Text } from "@chakra-ui/react";
import { PageTitle } from "@/components/PageTitle";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Container maxW="4xl">
              <Flex justifyContent="center">
                <NavigationMenu />
                <Stack align="center" spacing={{ base: 8, md: 10 }}>
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
    </ClerkProvider>
  );
}
