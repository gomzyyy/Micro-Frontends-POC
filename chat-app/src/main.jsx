import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Chat.jsx";
import { ReduxProvider } from "store/Store";

createRoot(document.getElementById("root")).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
