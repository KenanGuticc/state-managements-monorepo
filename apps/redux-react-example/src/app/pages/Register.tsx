/* eslint-disable @typescript-eslint/ban-types */
import { IUser } from "libs/data-access/src";
import { RegisterTemplate } from "libs/shared/src";
import React, {  Dispatch } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../stores/user.actionCreators";

export const Register: React.FC = () => {

  const dispatch: Dispatch<any> = useDispatch();

  const onSubmit = (e: React.FormEvent, user: IUser | {} | unknown) => {
    e.preventDefault();
    dispatch(addUser(user as IUser));
  };

  return RegisterTemplate({ onSubmit })
   
};
