import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Message} from "../../utils/types";
import {fetchMessagesThunk} from "./messagesThunk";

type Messages = {
  messages: Message[];
  recipient: string;
  conversationId: number;
  isMessageLoading: boolean;
};
const initialState: Messages = {
  messages: [],
  recipient: "",
  conversationId: 0,
  isMessageLoading: true,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessagesThunk.fulfilled, (state, action) => {
        const {conversationId, messages} = action.payload.data;
        state.messages = messages;
        state.conversationId = conversationId;
        state.isMessageLoading = false;
      })
      .addCase(fetchMessagesThunk.pending, (state) => {
        state.isMessageLoading = true;
      });
  },
});
export const {setRecipient, setMessage} = messagesSlice.actions;

export default messagesSlice.reducer;
