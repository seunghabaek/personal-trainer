import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { firebaseInstance } from "./firebase";
import { Auth } from "./routes/Auth";

// test
// console.log(firebaseInstance);
// console.log(Auth);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
