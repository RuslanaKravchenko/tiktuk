import type { NextPage } from 'next';
import Head from 'next/head';

import { GetStaticProps } from 'next';

import { getTrending } from '../../utils/api';

interface IPost {
  [key: string]: any;
}

type TTrendsProps = {
  posts: IPost[];
};

const Trends: NextPage<TTrendsProps> = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>TikTuk | Trends</title>
        <meta name='description' content='TikTuk next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='header'></header>

      <main className='main'>
        <h1>Trends!</h1>
      </main>

      <footer className='footer'></footer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getTrending();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

export default Trends;
