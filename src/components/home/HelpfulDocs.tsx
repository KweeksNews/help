import React from 'react';
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
    <section className="max-w-5xl py-20 flex flex-col justify-center items-center mx-auto md:flex-row">
      <div className="text-center md:flex-1">
        <HelpfulImg className="w-[400px] px-8" role="img" />
      </div>
      <div className="text-center md:flex-1">
        <h2 className="mb-12">Paling Sering Ditanyakan</h2>
        <div className="grid grid-cols-1 gap-4">
          {docs &&
            docs.map(({ category, title, path }, i) => (
              <DocCard key={i} category={category} title={title} path={path} />
            ))}
        </div>
      </div>
    </section>
  );
}
