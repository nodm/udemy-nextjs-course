import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const slug = fileName.replace(/\.md$/, '');

  return { slug, ...data, content };
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  return postFiles.map(getPostData).sort((postA, postB) => postA.date > postB.date ? -1 : 1);
}

export function getFeaturedPosts() {
  return getAllPosts().filter(({ isFeatured }) => isFeatured);
}