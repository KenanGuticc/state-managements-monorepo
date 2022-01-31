/* eslint-disable @typescript-eslint/no-empty-function */
import { IUser } from "libs/data-access/src";
import React, { createContext, useState } from "react";
import {  UsersContextState } from "./user.type";

const contextDefaultValues: UsersContextState = {
  users: [
    {
      id: 1,
      fullName: "John",
      username: "John123",
      email: "john@hotmail.com",
      password: "123456",
      acceptTerms: true,
    },
    {
      id: 2,
      fullName: "Terry",
      username: "Terry123",
      email: "terry@hotmail.com",
      password: "123456",
      acceptTerms: true,
    },
  ],
  addUser: () => {},
  removeUser: () => {}
};

export const UsersContext =
  createContext<UsersContextState>(contextDefaultValues);

const UsersProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>(contextDefaultValues.users);

  const addUser = (newUser: IUser) => setUsers((users) => { newUser.id = Math.random(); return [...users, newUser]});
  const removeUser = (user: IUser) => setUsers((users) => [...users.filter(u => u.id !== user.id)]);

  return (
    <UsersContext.Provider
      value={{
        users,
        addUser,
        removeUser
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
