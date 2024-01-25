import Head from 'next/head';
import { getPostData, getPostFiles } from '../../lib/post-util';
import PostContent from '../../components/posts/post-detail/post-content';

function PostDetailPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head> 
      <PostContent post={post} />
    </>
  );
}

export function getStaticPaths() {
  const paths = getPostFiles()
    .map((fileName) => ({
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }));

  return {
    paths,
    // fallback: 'blocking',
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export default PostDetailPage;