import "bootstrap/dist/css/bootstrap.min.css";

import { Register } from "./pages/Register";
import { Info } from "./pages/Info";
import UsersProvider from "./stores/user.context";

function App() {
  return (
    <UsersProvider>
      <div className="App">
        <Register />
        <Info />
      </div>
    </UsersProvider>
  );
}

export default App;
