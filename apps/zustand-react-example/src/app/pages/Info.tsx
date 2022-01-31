import { IUser } from "libs/data-access/src";
import { InfoTemplate } from "libs/shared/src";
import React from "react";
import { useUserStore } from "../stores/user.store";

export const Info: React.FC = () => {
  const users: readonly IUser[] = useUserStore((state) => state.users);
  const removeUser = useUserStore((state) => state.removeUser);

  const deleteUser = (user: IUser): void => {
    removeUser(user);
  };

  return InfoTemplate({ deleteUser, users })
};
