import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const DUMMY_POSTS = [
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a React framework for production - it makes building full stack React apps and sites a breeze and ships with built-in SSR.',
    date: '2024-01-24',
    slug: 'getting-started-with-next-js',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a React framework for production - it makes building full stack React apps and sites a breeze and ships with built-in SSR.',
    date: '2024-01-24',
    slug: 'getting-started-with-next-js1',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a React framework for production - it makes building full stack React apps and sites a breeze and ships with built-in SSR.',
    date: '2024-01-24',
    slug: 'getting-started-with-next-js2',
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;