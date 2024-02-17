import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import background from "./static_file/bacround_img.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Context = createContext({});
root.render(
  <React.StrictMode>
    <Context.Provider value="">
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "100% 100%",
        }}
      >
        <App />
      </div>
    </Context.Provider>
  </React.StrictMode>
);
