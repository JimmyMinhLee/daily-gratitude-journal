import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Container, Flex, Stack } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/nextjs";
import { Animate } from "@/components/shared/Animate";
import { NavigationBar } from "@/components/navigation/NavigationBar";
import Header from "@/components/home/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "daily gratitudes ",
  description: "by jimmyminhlee",
};

export default async function RootLayout({
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
                <NavigationBar />
                <Animate delay={0.2}>
                  <Stack align="center" spacing={{ base: 8, md: 10 }}>
                    <Header />
                    <Container size="2xl">{children}</Container>
                  </Stack>
                </Animate>
              </Flex>
            </Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
