"use client";

import { Button, Stack, Textarea } from "@chakra-ui/react";
import { currentUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function SubmitGratitude() {
  const [gratitude, setGratitude] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const router = useRouter();

  const submitData = () => {
    try {
      setLoading(true);
      const body = {
        title: "hello",
        content: gratitude,
      };
      fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/gratitudes");
    } catch (error) {
      console.error(`Error occured while pushing gratitude post: ${error}`);
    }
  };

  return (
    <>
      <Stack direction="column">
        <Textarea
          value={gratitude}
          onChange={(e: any) => {
            setGratitude(e.target.value);
          }}
          placeholder="a nice warm coffee..."
        />
        {isLoading ? (
          <Button isLoading />
        ) : (
          <Button onClick={submitData}>submit</Button>
        )}
      </Stack>
    </>
  );
}
