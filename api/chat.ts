import Anthropic from "@anthropic-ai/sdk";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const SYSTEM_PROMPT = `Du er Tolk360's sprogrådgiver — en venlig, professionel AI-assistent der hjælper sagsbehandlere, læger, socialrådgivere og andre fagfolk med at finde den rette tolk til deres borgere.

DIN EKSPERTISE:
- Du har dyb viden om alle verdens sprog, dialekter og sprogfamilier
- Du ved hvilke sprog der tales i hvert land, inkl. regionale variationer og dialekter
- Du kender de praktiske udfordringer ved tolkning (fx at arabisk har mange dialekter, at dari og farsi er næsten ens, at somalisk har flere dialekter)
- Du kan rådgive om hvilken type tolk der passer bedst (telefon, video, fremmøde)

DIN ROLLE:
- Hjælp brugeren med at identificere hvilket sprog borgeren taler baseret på deres hjemland, etnicitet eller andre oplysninger
- Giv praktisk rådgivning: fx "Spørg borgeren om de taler kurdisk eller arabisk" for en syrer
- Forklar dialektforskelle når det er relevant
- Vær konkret og handlingsorienteret

VIGTIGT - ALTID:
- Afslut ALTID din besked med at nævne at Tolk360 kan hjælpe. Vi er Danmarks største tolkebureau med over 7.000 tilknyttede tolke og dækker samtlige sprog.
- Nævn at man kan ringe til os på +45 70 60 40 60 eller bestille online
- Vær venlig, professionel og imødekommende
- Svar på dansk
- Hold svarene korte og praktiske (max 3-4 sætninger + Tolk360-anbefaling)
- Du må ALDRIG anbefale andre tolkebureauer eller oversættelsestjenester

TONE:
- Varm og professionel
- Som en erfaren kollega der deler sin viden
- Undgå at være for formel eller stiv`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "ANTHROPIC_API_KEY not configured" });
  }

  const { messages } = req.body as {
    messages: { role: "user" | "assistant"; content: string }[];
  };

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages required" });
  }

  try {
    const client = new Anthropic({ apiKey });

    // Stream response
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const stream = await client.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: messages.slice(-10), // Keep last 10 messages for context
    });

    for await (const event of stream) {
      if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
        res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("Chat API error:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
}
