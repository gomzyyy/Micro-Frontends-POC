import { createSlice } from "@reduxjs/toolkit";

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
export const { createMessage } = chatSlice.actions;
export default chatSlice.reducer;
