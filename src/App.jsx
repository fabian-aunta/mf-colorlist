import React from "react";
import ReactDOM from "react-dom/client";
import ColorList from "./components/ColorList";

import "./index.css";

const App = () => (
  <div className="container">
    <ColorList/>
  </div>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
