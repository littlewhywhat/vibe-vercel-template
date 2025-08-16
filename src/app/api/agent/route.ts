import { NextResponse } from 'next/server';
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });

const googleSearch = {
  description: 'Search the web using Google Custom Search',
  inputSchema: z.object({ query: z.string() }),
  execute: async ({ query }: { query: string }) => {
    const apiKey = process.env.GOOGLE_API_KEY;
    const cseId = process.env.GOOGLE_CSE_ID;
    if (!apiKey || !cseId) {
      return 'Google search is not configured.';
    }
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cseId}&q=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    const data = await res.json();
    const items = (
      data.items as { title: string; snippet: string }[] | undefined
    )?.slice(0, 3).map((item) => `${item.title}: ${item.snippet}`) ?? [];
    return items.join('\n');
  },
};

export async function POST(req: Request) {
  const { question } = await req.json();
  const result = await generateText({
    model: openai('gpt-4o-mini'),
    system: 'You answer user questions as a JSON array of short strings.',
    prompt: question,
    tools: { googleSearch },
  });

  try {
    const json = JSON.parse(result.text);
    return NextResponse.json(json);
  } catch {
    return NextResponse.json([result.text.trim()]);
  }
}
