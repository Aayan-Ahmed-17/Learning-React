import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ToDo from "./todo/todo.jsx";
import ApiCalling from "./api calling/apiCalling.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* // <App /> */}
    {/* // <ToDo /> */}
    <ApiCalling />
  </StrictMode>
);
