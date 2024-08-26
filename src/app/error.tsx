'use client';

import { ERRORS } from './errors';

export default function Error({ error }: { error: Error }) {
  if (error.message === ERRORS.NOT_FOUND) {
    return <p>Articles not found</p>;
  }
  return <div>Sorry, something went wrong.</div>;
}
