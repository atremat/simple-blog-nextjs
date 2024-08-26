import Link from 'next/link';
import React from 'react';
import styles from './app-link.module.css';

export interface AppLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function AppLink({ children, href }: AppLinkProps) {
  return (
    <Link className={styles.root} href={href}>
      {children}
    </Link>
  );
}
