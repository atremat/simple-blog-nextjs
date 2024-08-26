import React from 'react';
import Image from 'next/image';
import myImage from './me.png';
import styles from './about.module.css';

export interface AboutPageProps {}

export default function AboutPage({}: AboutPageProps) {
  return (
    <article className={styles.root}>
      <Image src={myImage} alt="developer" loading="eager" priority />

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maxime
        perferendis, fugit non at culpa possimus ducimus est, perspiciatis
        mollitia consectetur! Nihil ipsum delectus praesentium facere error
        labore nisi cum? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Distinctio consequuntur nulla inventore alias amet iusto beatae
        veniam harum! Nisi neque explicabo facere beatae necessitatibus dolores
        omnis asperiores esse soluta modi.
      </div>
    </article>
  );
}
