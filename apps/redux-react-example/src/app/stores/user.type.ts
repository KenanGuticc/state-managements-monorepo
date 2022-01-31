import { IUser } from "libs/data-access/src"

export type UserState = {
  users: IUser[]
}

export type UsersAction = {
  type: string
  user: IUser
}

export type DispatchType = (args: UsersAction) => UsersAction
