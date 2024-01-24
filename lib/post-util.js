import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const slug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return { slug, ...data, content };
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  return postFiles
    .map(getPostData)
    .sort((postA, postB) => postA.date > postB.date ? -1 : 1);
}

export function getFeaturedPosts() {
  return getAllPosts().filter(({ isFeatured }) => isFeatured);
}
