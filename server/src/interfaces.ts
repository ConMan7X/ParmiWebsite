export interface User {
  id: string;
  email: string;
  password: string;
  username: string;
}

export interface DataStore {
  users: User[];
}
