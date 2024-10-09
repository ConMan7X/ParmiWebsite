import HTTPError from 'http-errors';

import { getData, setData } from './dataStore';
import { DataStore } from './interfaces';
import { generateID } from './helperFunctions';

export function createThread(post: string, userId: string) {
  const data: DataStore = getData();

  const postId: string = generateID();

  data.posts.unshift({
    id: postId,
    title: post,
    userId,
  });

  return {
    message: 'Post created successfully',
    posts: data.posts,
  };
}
