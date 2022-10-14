import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Message} from "../../utils/types";
import {fetchMessagesThunk} from "./messagesThunk";

type Messages = {
  messages: Message[];
  recipient: string;
  conversationId: number;
};
const initialState: Messages = {
  messages: [],
  recipient: "",
  conversationId: 0,
};
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setRecipient: (state, action: PayloadAction<string>) => {
      state.recipient = action.payload;
    },
    setMessage: (state, action: PayloadAction<Message>) => {
      state.messages.unshift(action.payload);
    },
    setConversation: (state, action: PayloadAction<number>) => {
      state.conversationId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessagesThunk.fulfilled, (state, action) => {
      state.messages = action.payload.data;
    });
  },
});
export const {setRecipient, setMessage, setConversation} =
  messagesSlice.actions;

export default messagesSlice.reducer;
