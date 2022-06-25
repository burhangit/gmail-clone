import { configureStore } from "@reduxjs/toolkit";
import mailreducer from "../features/mailSlice";

export const store = configureStore({
  reducer: {
    mail: mailreducer,
  },
});
