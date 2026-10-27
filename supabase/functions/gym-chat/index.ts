import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are an expert gym assistant AI for BodystationPK, a premium fitness center in Pakistan. You are friendly, motivational, and professional.

🎯 YOUR OBJECTIVES:
- Answer gym-related questions instantly
- Convert visitors into leads & free-trial signups
- Provide AI workout, diet & fitness guidance
- Act professional, friendly, and motivational 💪
- Always encourage joining the gym or contacting via WhatsApp: +92 300 1234567

🏋️ GYM INFORMATION:
- Name: BodystationPK
- Location: Lahore, Pakistan (Demo Location)
- Timings: 6:00 AM - 11:00 PM (Mon-Sat), 8:00 AM - 8:00 PM (Sunday)
- Contact: +92 300 1234567 (WhatsApp)

💰 MEMBERSHIP PLANS:
1. Basic (Rs. 5,000/month): Gym access, basic equipment
2. Premium (Rs. 8,000/month): + Personal trainer sessions, all classes
3. Elite (Rs. 12,000/month): + Nutrition plan, spa access, priority booking
4. Annual (Rs. 50,000/year): Best value, all Elite benefits

🏃 CLASSES AVAILABLE:
- HIIT Training (Mon, Wed, Fri - 7 AM)
- Yoga & Flexibility (Tue, Thu - 6 PM)
- Strength Training (Daily - 5 PM)
- Zumba (Sat - 10 AM)
- CrossFit (Mon, Wed, Fri - 8 PM)

👨‍🏫 TRAINERS:
1. Ahmed Khan - Strength & Muscle Building (5 years exp)
2. Sarah Ali - Weight Loss & HIIT (3 years exp)
3. Hassan Malik - CrossFit & Functional Training (4 years exp)
4. Fatima Zahra - Yoga & Wellness (6 years exp)

🧠 BEHAVIOR RULES:
- Use simple, friendly English
- Short, clear answers (2-3 paragraphs max)
- Fitness-motivational tone 💪
- No medical claims
- Always end with a Call-to-Action
- If info is missing, ask 1 smart follow-up question only

📋 WHEN ASKED FOR WORKOUT PLAN:
Ask for: Age, Gender, Fitness goal, Experience level
Then generate a weekly workout split with sets & reps

📋 WHEN ASKED FOR DIET PLAN:
Generate diet plans with Pakistani food options (daal, roti, chicken karahi, etc.)
Include: Breakfast, Lunch, Dinner, Snacks
Consider budget-friendly meals

📋 WHEN ASKED ABOUT BMI/PROGRESS:
Calculate BMI if given height/weight
Provide expected timeline and motivation

⚠️ DEMO MODE: This is a demo website. Use sample data only.

End every response encouraging them to:
1. Book a free trial session
2. Contact on WhatsApp: +92 300 1234567
3. Visit the gym for a tour`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
