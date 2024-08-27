import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { preview } = body;
  return Response.json({ preview });
}
