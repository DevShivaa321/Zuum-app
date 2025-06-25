import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const apiSecret = process.env.STREAM_API_SECRET!;

export async function POST(request: Request) {
  const { userId } = await request.json();

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
  }

  const token = jwt.sign({ user_id: userId }, apiSecret, { expiresIn: '1h' });

  return NextResponse.json({ token });
}
