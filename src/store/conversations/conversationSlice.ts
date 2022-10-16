import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Conversation} from "../../utils/types";
import {fetchConversationsThunk} from "./conversationThunk";

type AllConversations = {
  conversations: Conversation[];
};

const initialState: AllConversations = {
  conversations: [],
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    updateConversation: (state, action: PayloadAction<Conversation>) => {
      const conversation = action.payload;

      const index = state.conversations.findIndex(
        (c) => c.id === conversation.id
      );
      state.conversations.splice(index, 1);
      state.conversations.unshift(conversation);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConversationsThunk.fulfilled, (state, action) => {
      state.conversations = action.payload.data;
    });
  },
});

export const {updateConversation} = conversationSlice.actions;
export default conversationSlice.reducer;
