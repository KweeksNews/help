import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { HomepageFeatures } from '@site/src/components';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <header className="hero hero--primary px-8 py-24 text-center lg:px-16">
        <div className="container">
          <h1 className="mb-4 text-2xl font-semibold">Selamat Datang di Pusat Bantuan</h1>
          <p className="text-5xl font-bold">Apa yang bisa kami bantu?</p>
        </div>
      </header>

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
