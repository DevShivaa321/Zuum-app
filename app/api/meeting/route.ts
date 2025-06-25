import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { hostId, meetingId, startsAt } = await req.json();

  // Optional: Add database logic here to save meeting info.

  return NextResponse.json({
    message: 'Meeting created',
    data: { hostId, meetingId, startsAt },
  });
}
