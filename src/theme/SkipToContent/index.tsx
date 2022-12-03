import React from 'react';
import { SkipToContentLink } from '@docusaurus/theme-common';

export default function SkipToContent(): JSX.Element {
  return (
    <SkipToContentLink className="button fixed top-2 -left-96 z-[-99] focus:left-2 focus:z-[250] active:left-2 active:z-50" />
  );
}
