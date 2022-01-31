/* eslint-disable @typescript-eslint/ban-types */
import { IUser } from 'libs/data-access/src';
import { RegisterTemplate } from 'libs/shared/src';
import React from 'react';
import { useUserStore } from '../stores/user.store';

export const Register: React.FC = () => {
  const addUser = useUserStore((state) => state.addUser);

  const onSubmit = (e: React.FormEvent, user: IUser | {} | unknown) => {
    e.preventDefault();
    addUser(user as IUser);
  };

  return RegisterTemplate({ onSubmit });
};
