import React from 'react';
import Link from '@docusaurus/Link';

type Props = {
  category: string;
  title: string;
  path: string;
};

export function DocCard({ category, title, path }: Props) {
  return (
    <Link
      className="w-full max-w-xs p-6 mx-auto border border-solid border-gray-300 rounded-xl text-left hover:border-tigers-eye hover:no-underline dark:border-gray-700 dark:hover:hover:border-tigers-eye"
      to={path}
    >
      <p className="mb-0 text-sm font-bold">{category}</p>
      <h3 className="mb-0 text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>
    </Link>
  );
}
