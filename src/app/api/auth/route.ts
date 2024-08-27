import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const auth = cookies().get('auth');
  const userAgent = req.headers.get('user-agent');
}
