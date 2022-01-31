import { IUser } from "libs/data-access/src";
import { InfoTemplate } from "libs/shared/src";
import React, { Dispatch } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeUser } from "../stores/user.actionCreators";
import { UserState } from "../stores/user.type";

export const Info: React.FC = () => {
  const users: readonly IUser[] = useSelector(
    (state: UserState) => state.users,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const deleteUser = (user: IUser): void => {
    dispatch(removeUser(user));
  };

  return InfoTemplate({ deleteUser, users })
};
