import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },

    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    selectSendMessageIsOpen: (state) => {
      state.sendMessageIsOpen = true;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectSendMessageIsOpen } =
  mailSlice.actions;

export const selectMail = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
