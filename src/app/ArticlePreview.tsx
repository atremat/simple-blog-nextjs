'use client';

import { useEffect, useState } from 'react';
import { ROUTING } from './routing';
import AppLink from './shared/components/app-link';

type ArticlePreviewProps = {
  name: string;
  text: string;
};

const getLikeKey = (articleName: string) => `developer_blog_${articleName}`;

export function ArticlePreview({ name, text }: ArticlePreviewProps) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likeKey = getLikeKey(name);
    const likeValueString = localStorage.getItem(likeKey);
    const likeValue = likeValueString ? JSON.parse(likeValueString) : false;
    setLiked(likeValue === true);
  }, [name]);

  const like = () => {
    const likeKey = getLikeKey(name);
    localStorage.setItem(likeKey, JSON.stringify(!liked));
    setLiked(!liked);
  };

  return (
    <>
      <AppLink href={ROUTING.article(name)}>{text}</AppLink>
      <button onClick={like} type="button">
        {liked ? '❤' : '🤍'}
      </button>
    </>
  );
}
