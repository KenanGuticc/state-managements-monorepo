/* eslint-disable no-case-declarations */
import { IUser } from 'libs/data-access/src';
import * as actionTypes from './user.actionTypes';
import { UserState, UsersAction } from './user.type';

const initialState: UserState = {
  users: [
    {
      id: 1,
      fullName: 'John',
      username: 'John123',
      email: 'john@hotmail.com',
      password: '123456',
      acceptTerms: true,
    },
    {
      id: 2,
      fullName: 'Terry',
      username: 'Terry123',
      email: 'terry@hotmail.com',
      password: '123456',
      acceptTerms: true,
    },
  ],
};

const usersReducer = (
  state: UserState = initialState,
  action: UsersAction
): UserState => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      const newUser: IUser = {
        id: Math.random(),
        fullName: action.user.fullName,
        username: action.user.username,
        email: action.user.email,
        password: action.user.password,
        acceptTerms: action.user.acceptTerms,
      };
      return {
        ...state,
        users: state.users.concat(newUser),
      };
    case actionTypes.REMOVE_USER:
      // eslint-disable-next-line no-case-declarations
      const updatedUsers: IUser[] = state.users.filter(
        (user) => user.id !== action.user.id
      );
      return {
        ...state,
        users: updatedUsers,
      };
  }
  return state;
};

export default usersReducer;
