import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import Head from 'next/head';

import { getTrending, getUserInfo, getUserPosts } from '../utils/api';

interface IObject {
  [key: string]: any;
}

type TProfileProps = {
  user: IObject;
  posts: IObject[];
};

const Profile: NextPage<TProfileProps> = ({ user, posts }) => {
  console.log(user);
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

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getTrending();

  const paths = posts.map((post: IObject) => ({
    params: { slug: String(post.authorMeta.name) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const profile = await getUserInfo(slug);
  const posts = await getUserPosts(slug);

  if (!profile.user || !posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: profile.user,
      posts,
    },
    revalidate: 10,
  };
};

export default Profile;
