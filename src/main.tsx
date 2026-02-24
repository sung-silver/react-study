import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./study3/UseRefSelect";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
