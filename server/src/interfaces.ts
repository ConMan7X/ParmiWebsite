export interface User {
  id: string;
  email: string;
  password: string;
  username: string;
}

export interface Reply {
  userId: string;
  content: string;
}

export interface Post {
  id: string;
  title: string;
  userId: string;
}

export interface DataStore {
  users: User[];
  posts: Post[];
}
