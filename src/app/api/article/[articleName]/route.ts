export function GET(_, { params }: any) {
  const articleName = params.articleName;
  return Response.json(articleName);
}
