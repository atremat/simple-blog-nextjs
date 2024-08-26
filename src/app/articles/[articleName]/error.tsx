'use client';

import AppLink from '@/shared/components/app-link';
import React from 'react';

export interface ErrorProps {}

export default function Error({}: ErrorProps) {
  return (
    <>
      <p>No articles found</p>
      <AppLink href="/">Go Home</AppLink>
    </>
  );
}
