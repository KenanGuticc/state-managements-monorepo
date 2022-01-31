/* eslint-disable @typescript-eslint/ban-types */
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider, observer } from "mobx-react";
import { useState } from "react";
import Info from "./pages/Info";
import Register from "./pages/Register";
import RootStore from "./stores/root.stores";


const App: React.FunctionComponent<{}> = () => {
  const [store] = useState(() => new RootStore());

  return (
    <Provider store={store}>
      <div className="App">
        <Register />
        <Info />
      </div>
    </Provider>
  );
};

export default observer(App);