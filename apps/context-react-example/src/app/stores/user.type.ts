import { IUser } from 'libs/data-access/src';

export type UsersContextState = {
  users: IUser[];
  addUser: (user: IUser) => void;
  removeUser: (user: IUser) => void;
};
