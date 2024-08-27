import { NextRequest } from 'next/server';

export function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams;
  const articleName = search.get('articleName');
  return Response.json({ articleName });
}
