import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
// @ts-ignore
import { useSkipToContent } from '@docusaurus/theme-common/internal';

export default function SkipToContent() {
  const { containerRef, handleSkip } = useSkipToContent();

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={translate({ id: 'theme.common.skipToMainContent' })}
    >
      <a
        href="#"
        className="button absolute top-2 -left-96 z-[-99] focus:left-2 focus:z-[250] active:left-2 active:z-50"
        onClick={handleSkip}
      >
        <Translate
          id="theme.common.skipToMainContent"
          description="The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"
        >
          Skip to main content
        </Translate>
      </a>
    </div>
  );
}
