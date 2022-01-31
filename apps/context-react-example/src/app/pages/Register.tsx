/* eslint-disable @typescript-eslint/ban-types */
import { IUser } from 'libs/data-access/src';
import { RegisterTemplate } from 'libs/shared/src';
import React, { useContext } from 'react';
import { UsersContext } from '../stores/user.context';

export const Register: React.FC = () => {
  const { addUser } = useContext(UsersContext);

  const onSubmit = (e: React.FormEvent, user: IUser | {} | unknown) => {
    e.preventDefault();
    addUser(user as IUser);
  };

  return RegisterTemplate({ onSubmit });
};
