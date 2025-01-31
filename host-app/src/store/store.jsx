import { configureStore, createSlice } from "@reduxjs/toolkit";
import emailData, { inboxMail, outboxMail, draftMail } from "../static/data";
import { Provider, useDispatch, useSelector } from "react-redux";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [
      {
        userName: "Gomzy1",
        text: "Hello this is first message",
      },
      {
        userName: "Gomzy2",
        text: "Hello this is second message",
      },
    ],
  },
  reducers: {
    createMessage: (state, action) => {
      state.messages = [action.payload, ...state.messages];
    },
  },
});
const { createMessage } = chatSlice.actions;

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    inbox: inboxMail,
    outbox: outboxMail,
    drafts: draftMail,
    allMails: emailData,
  },
  reducers: {
    createMail: (state, action) => {
      state.outbox = [action.payload, ...state.outbox];
    },
  },
});
export const { createMail } = mailSlice.actions;

const Store = configureStore({
  reducer: {
    mail: mailSlice.reducer,
    chat: chatSlice.reducer,
  },
});
export default Store;

export const useStore = () => {
  const mail = useSelector((s) => s?.mail);
  const chat = useSelector((s) => s?.chat);
  const dispatch = useDispatch();
  return {
    mail,
    chat,
    dispatch,
    sendMail: (data) => dispatch(createMail(data)),
    sendMessage: (data) => dispatch(createMessage(data)),
  };
};

export function ReduxProvider({ children }) {
  return <Provider store={Store}>{children}</Provider>;
}
