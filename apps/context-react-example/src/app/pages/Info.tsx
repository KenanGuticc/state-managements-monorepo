import { IUser } from "libs/data-access/src";
import { InfoTemplate } from "libs/shared/src";
import React, { useContext } from "react";
import { UsersContext } from "../stores/user.context";

export const Info: React.FC = () => {
  const { users, removeUser } = useContext(UsersContext);

  const deleteUser = (user: IUser): void => {
    removeUser(user);
  };

  return InfoTemplate({ deleteUser, users })

};
