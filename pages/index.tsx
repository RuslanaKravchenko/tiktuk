import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TikTuk | TikTuk</title>
        <meta name='description' content='TikTuk next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='header'></header>

      <main className='main'>
        <h1>Hello TikTuk!</h1>
      </main>

      <footer className='footer'></footer>
    </>
  );
};

export default Home;
