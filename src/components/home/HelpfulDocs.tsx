import React from 'react';
import Link from '@docusaurus/Link';
import HelpfulImg from '../../../static/assets/images/helpful.svg';
import { DocCard } from '../core';

type Props = {
  docs: {
    category: string;
    title: string;
    path: string;
  }[];
};

export function HelpfulDocs({ docs }: Props) {
  return (
    <section className="max-w-6xl px-8 py-20 flex flex-col justify-center items-center mx-auto md:flex-row">
      <div className="text-center md:pr-8 md:flex-1">
        <HelpfulImg className="w-full max-w-[400px]" role="img" />
      </div>
      <div className="text-center md:pl-8 md:flex-1 lg:flex-[2_2_0%]">
        <h2 className="mb-12 text-3xl font-bold leading-snug">
          Paling Sering Ditanyakan
        </h2>
        <div className="grid grid-cols-1 gap-4 mb-8 lg:grid-cols-2">
          {docs &&
            docs.map(({ category, title, path }, i) => (
              <DocCard key={i} category={category} title={title} path={path} />
            ))}
        </div>
        <Link className="button" to="/docs/websites">
          Lihat semua dokumentasi
        </Link>
      </div>
    </section>
  );
}
