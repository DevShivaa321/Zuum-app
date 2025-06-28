'use server';

import { currentUser } from '@clerk/nextjs/server';
import jwt from 'jsonwebtoken';

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
const STREAM_API_SECRET = process.env.STREAM_API_SECRET!;

export const tokenProvider = async () => {
  const user = await currentUser();
  if (!user) throw new Error('User is not authenticated');

  const payload = {
    user_id: user.id,
  };

  const token = jwt.sign(payload, STREAM_API_SECRET, {
    expiresIn: '1h',
  });

  return token;
};
