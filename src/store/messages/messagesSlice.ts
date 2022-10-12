import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Message} from "../../utils/types";
import {fetchMessagesThunk} from "./messagesThunk";

type Messages = {
  messages: Message[];
};
const initialState: Messages = {
  messages: [],
};
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessagesThunk.fulfilled, (state, action) => {
      state.messages = action.payload.data;
    });
  },
});

export default messagesSlice.reducer;
