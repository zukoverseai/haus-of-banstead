import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Extract scheduling details from request body
  const { start_time, event_type, invitee } = await req.json();

  // Calendly API endpoint and token from environment
  const token = process.env.CALENDLY_TOKEN;
  const url = "https://api.calendly.com/scheduled_events";

  // Send scheduling request to Calendly
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event_type: event_type, // e.g. "https://api.calendly.com/event_types/12345"
      start_time: start_time, // ISO 8601 string
      invitee: {
        name: invitee.name,
        email: invitee.email,
      },
    }),
  });

  // Handle error from Calendly
  if (!res.ok) {
    const err = await res.json();
    return NextResponse.json({ error: err }, { status: 400 });
  }

  // Parse and return the scheduling URL from Calendly
  const data = await res.json();
  return NextResponse.json({ scheduling_url: data.resource.scheduling_url });
}
