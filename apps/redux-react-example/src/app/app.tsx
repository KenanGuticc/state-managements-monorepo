import "bootstrap/dist/css/bootstrap.min.css";

import  { Register } from './pages/Register';
import { Provider } from "react-redux"
import { userStore }  from './stores/user.store';
import { Info } from './pages/Info';

function App() {
  return (
    <Provider store={ userStore }>
    <div className="App">
      <Register/>
      <Info />
    </div>
    </Provider>
  );
}

export default App;
