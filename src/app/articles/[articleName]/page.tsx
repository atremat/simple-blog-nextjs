import React from 'react';

export default function ArticlePage({ params }: Params) {
  const { articleName } = params;
  return <div>This is article {articleName}</div>;
}
