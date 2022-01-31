import { IUser } from "libs/data-access/src";
import { InfoTemplate } from "libs/shared/src";
import { observer } from "mobx-react";
import { WithStoreProps, injectStore } from "../stores/root.stores";

 const Info: React.FC<WithStoreProps> = (props) => {
  const {
    store,
  } = props;

  const deleteUser = (user: IUser): void => {
    store?.usersStore.removeUser(user)
  };

  return InfoTemplate({ deleteUser, users: store?.usersStore.getUsers() || [] })

};

export default injectStore((observer(Info)));
