import Link from 'next/link';
import React from 'react';
import styles from './app-link.module.css';
import { UrlObject } from 'url';

export interface AppLinkProps {
  children: React.ReactNode;
  href: string | UrlObject;
}

export default function AppLink({ children, href }: AppLinkProps) {
  return (
    <Link className={styles.root} href={href}>
      {children}
    </Link>
  );
}
