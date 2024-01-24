import PostGrid from '../../components/posts/post-grid';
import classes from './all-posts.module.css';

function AllPostsPage() {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={[]} />
    </section>
  );
}

export default AllPostsPage;