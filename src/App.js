import "./App.scss";
import "./fonts/CrimsonText-Regular.ttf";
import "./fonts/CrimsonText-Bold.ttf";

import { BrowserRouter } from "react-router-dom";
import Router from "./components/pages/router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
