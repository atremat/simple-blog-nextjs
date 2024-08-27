import data from '../db.json';

export function GET() {
  return Response.json(data);
}
