import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Message} from "../../utils/types";
import {fetchMessagesThunk} from "./messagesThunk";

type Messages = {
  messages: Message[];
  recipient: string;
};
const initialState: Messages = {
  messages: [],
  recipient: "",
};
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setRecipient: (state, action: PayloadAction<string>) => {
      state.recipient = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessagesThunk.fulfilled, (state, action) => {
      state.messages = action.payload.data;
    });
  },
});
export const {setRecipient} = messagesSlice.actions;

export default messagesSlice.reducer;
