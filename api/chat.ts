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
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const { messages } = req.body as {
    messages: { role: "user" | "assistant"; content: string }[];
  };

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages required" });
  }

  try {
    // Build Gemini API request body using REST API directly (no SDK needed)
    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const body = {
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }],
      },
      contents,
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", response.status, errText);
      return res.status(500).json({ error: "AI service error" });
    }

    const data = await response.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "Beklager, jeg kunne ikke generere et svar.";

    return res.status(200).json({ text });
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({ error: "Failed to generate response" });
  }
}
