import { Route, Routes } from "react-router-dom";

import "./App.css";
import BayannoHome from "./components/bayannohome";
import BayannoLogin from "./components/bayannologin";

const App = () => {
  return (
    <Routes>
      <Route exact path="/bayanno/home" element={<BayannoHome />} />
      <Route exact path="/bayanno/login" element={<BayannoLogin />} />
    </Routes>
  );
};

export default App;
