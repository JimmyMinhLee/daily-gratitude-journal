'use client';

export async function submitGratitude(req: SubmitGratitudeRequest) {
  try {
    const body = {
      title: "",
      content: req.content,
    };
    return await fetch(`/api/gratitudes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error(`Error occured while pushing gratitude post: ${error}`);
  }
}
