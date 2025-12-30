import { streamText, convertToModelMessages } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `You are a helpful assistant that generates engaging, friendly questions for an anonymous social messaging platform. 
    
When asked to generate questions:
- Create open-ended and engaging questions
- Format them as a single string separated by '||'
- Avoid personal or sensitive topics
- Focus on universal themes that encourage friendly interaction
- Ensure questions are intriguing and contribute to a positive conversational environment

Example format: 'What's a hobby you've recently started?||If you could have dinner with any historical figure, who would it be?||What's a simple thing that makes you happy?'`;

    // Await the conversion of messages
    const convertedMessages = await convertToModelMessages(messages);

    const result = streamText({
      model: openai("gpt-4o"), // or 'gpt-4-turbo', 'gpt-3.5-turbo'
      system: systemPrompt,
      messages: convertedMessages,
      temperature: 0.8,
      maxRetries: 3,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
