export async function GET() {
  const headers = { hello: 'world' };
  return Response.json(null, { status: 400, headers });
}
