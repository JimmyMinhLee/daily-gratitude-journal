"use client";

import { Button, Stack, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function SubmitGratitude() {
  const [gratitude, setGratitude] = React.useState("");
  const router = useRouter();
  const handleInputChange = (e: any) => {
    setGratitude(e.target.value);
  };

  const handleClick = () => {
    router.push("/gratitudes");
  };

  return (
    <>
      <Stack direction="column">
        <Textarea
          value={gratitude}
          onChange={handleInputChange}
          placeholder="a nice warm coffee..."
        />
        <Button onClick={handleClick}>submit</Button>
      </Stack>
    </>
  );
}
