import HTTPError from 'http-errors';

import { getData, setData } from './dataStore';
import { DataStore } from './interfaces';
import { generateID } from './helperFunctions';

export function createThread(thread: string, userId: string) {
  const data: DataStore = getData();

  const threadId: string = generateID();

  data.threads.unshift({
    id: threadId,
    title: thread,
    userId,
    replies: [],
    likes: [],
  });

  return {
    message: 'Thread created successfully',
    threads: data.threads,
  };
}
