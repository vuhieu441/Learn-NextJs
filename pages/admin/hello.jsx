import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/layout';

const Hello = (props) => {
  return (
    <Layout>
      <Head>
        <title>Hello</title>
      </Head>
      <h1>Hello NextJs</h1>
      <Link href='/'>Home</Link>
    </Layout>
  );
};

export default Hello;
