import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import ChatApp from "../components/ChatApp";
import EmailApp from "../components/EmailApp";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/chat" element={<ChatApp/>} />
      <Route path="/email" element={<EmailApp/>} />
    </Route>
  )
);
