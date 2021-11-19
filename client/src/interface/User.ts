import { Board } from './Board';

export interface User {
  email: string;
  username: string;
  boards?: Board[];
}

export interface SearchUsersApiData {
  users: User[];
  error?: { message: string };
}
