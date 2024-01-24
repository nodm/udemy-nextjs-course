import { getFeaturedPosts } from '../lib/post-util';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getFeaturedPosts();

  return {
    props: {
      posts,
    },
    // revalidate: 60,
  };
}

export default HomePage;