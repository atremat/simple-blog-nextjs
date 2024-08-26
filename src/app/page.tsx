import Link from 'next/link';
import { getAllArticles } from './(server)/api';
import { ROUTING } from './routing';
import AppLink from './shared/components/app-link';

export default async function Home() {
  const allArticles = await getAllArticles();

  return (
    <>
      <h1>Dveloper blog</h1>
      <ul>
        {allArticles.map((article) => (
          <li key={article.name}>
            <AppLink href={ROUTING.article(article.name)}>
              {article.header}
            </AppLink>
          </li>
        ))}
      </ul>
    </>
  );
}
