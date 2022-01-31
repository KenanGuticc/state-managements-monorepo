/* eslint-disable @typescript-eslint/ban-types */

import { IUser } from "libs/data-access/src";
import { RegisterTemplate } from "libs/shared/src";
import { observer } from "mobx-react";
import { WithStoreProps, injectStore } from "../stores/root.stores";

const Register: React.FC<WithStoreProps> = (props) => {
  const { store } = props;

  const onSubmit = (e: React.FormEvent, user: IUser | {} | unknown) => {
    e.preventDefault();
    const tempUser = user as IUser;

    store?.usersStore.addUser(
      tempUser.fullName,
      tempUser.username,
      tempUser.password,
      tempUser.email,
      tempUser.acceptTerms
    );
  };

  return RegisterTemplate({ onSubmit });
};

export default injectStore(observer(Register));
