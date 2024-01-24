import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  excerpt: 'NextJs is a React framework for production - it makes building full stack React apps and sites a breeze and ships with built-in SSR.',
  date: '2024-01-24',
  slug: 'getting-started-with-next-js',
  content: '# This is a first post',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>
        {DUMMY_POST.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;