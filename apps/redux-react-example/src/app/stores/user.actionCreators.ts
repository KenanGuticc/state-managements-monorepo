import { IUser } from "libs/data-access/src";
import * as actionTypes from "./user.actionTypes"
import { DispatchType, UsersAction } from './user.type';

export function addUser(user: IUser) {
  const action: UsersAction = {
    type: actionTypes.ADD_USER,
    user,
  }

  return simulateHttpRequest(action)
}

export function removeUser(user: IUser) {
  const action: UsersAction = {
    type: actionTypes.REMOVE_USER,
    user,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: UsersAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}