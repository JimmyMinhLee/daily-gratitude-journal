'use client';

export async function fetchGratitudes(req: FetchGratitudesRequest)  {
    try {
      const response  = await fetch(`/api/gratitudes`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const gratitudes = await response.json()
      return gratitudes
    } catch (error) {
      console.error(`Error occured while pushing gratitude post: ${error}`);
    }
}