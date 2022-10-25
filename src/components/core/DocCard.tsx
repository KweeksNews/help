import React from 'react';
import Link from '@docusaurus/Link';

type Props = {
  category: string;
  title: string;
  path: string;
};

export function DocCard({ category, title, path }: Props) {
  return (
    <Link className="doccard" to={path}>
      <p className="mb-0 text-sm font-bold">{category}</p>
      <h3 className="mb-0 text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>
    </Link>
  );
}
