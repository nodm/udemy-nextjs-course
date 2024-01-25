import Head from 'next/head';
import { getAllPosts } from '../../lib/post-util';
import PostGrid from '../../components/posts/post-grid';
import classes from './all-posts.module.css';

function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related tutorials and posts!" />
      </Head> 
      <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostGrid posts={posts} />
      </section>
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    // revalidate: 60,
  };
}

export default AllPostsPage;