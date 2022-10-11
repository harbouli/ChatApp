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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConversationsThunk.fulfilled, (state, action) => {
      state.conversations = action.payload.data;
    });
  },
});

export default conversationSlice.reducer;
