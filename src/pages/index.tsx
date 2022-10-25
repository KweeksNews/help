import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import { config } from '../config';
import { HelpfulDocs, Hero } from '../components/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>KweeksHelp - Pusat Bantuan</title>
      </Head>
      <Layout description="Pusat bantuan yang berisi informasi dan dokumentasi mengenai penggunaan layanan-layanan KweeksNews Network.">
        <header>
          <Hero />
        </header>

        <main>
          <HelpfulDocs docs={config.docs} />
        </main>
      </Layout>
    </>
  );
}
