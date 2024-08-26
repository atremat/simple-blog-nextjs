'use client';

import { useEffect, useState } from 'react';
import { ROUTING } from './routing';
import AppLink from './shared/components/app-link';
import { articleStorage } from './ArticleStorage';

type ArticlePreviewProps = {
  name: string;
  text: string;
};

export function ArticlePreview({ name, text }: ArticlePreviewProps) {
  const [liked, setLiked] = useState(articleStorage.liked(name));

  // useEffect(() => {
  //   const likeKey = getLikeKey(name);
  //   const likeValueString = localStorage.getItem(likeKey);
  //   const likeValue = likeValueString ? JSON.parse(likeValueString) : false;
  //   setLiked(likeValue === true);
  // }, [name]);

  const like = () => {
    articleStorage.like(name);
    setLiked(!liked);
  };

  return (
    <>
      <AppLink href={ROUTING.article(name)}>{text}</AppLink>
      <button onClick={like} type="button" suppressHydrationWarning>
        {liked ? '❤' : '🤍'}
      </button>
    </>
  );
}
