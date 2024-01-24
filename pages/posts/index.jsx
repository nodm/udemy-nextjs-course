import { getAllPosts } from '../../lib/post-util';
import PostGrid from '../../components/posts/post-grid';
import classes from './all-posts.module.css';

function AllPostsPage({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
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