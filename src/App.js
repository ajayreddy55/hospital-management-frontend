import { Route, Routes } from "react-router-dom";

import "./App.css";
import BayannoHome from "./components/bayannohome";

const App = () => {
  return (
    <Routes>
      <Route exact path="/bayanno/home" element={<BayannoHome />} />
    </Routes>
  );
};

export default App;
