import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import { UserState, UsersAction, DispatchType } from './user.type'
import usersReducer from "./user.reducers"
 
export const userStore: Store<UserState, UsersAction> & {
  dispatch: DispatchType
} = createStore(usersReducer, applyMiddleware(thunk))


