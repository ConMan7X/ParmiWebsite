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

export interface Thread {
  id: string;
  title: string;
  userId: string;
  replies: Reply[];
  likes: string[];
}

export interface DataStore {
  users: User[];
  threads: Thread[];
}
