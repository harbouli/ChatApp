import {createAsyncThunk} from "@reduxjs/toolkit";
import {createConversation, getConversations} from "../../utils/api";
import {CreateConversationParam} from "../../utils/types";

export const fetchConversationsThunk = createAsyncThunk(
  "conversations/fetch",
  () => getConversations()
);

export const postCreateConversationsThunk = createAsyncThunk(
  "conversations/create",
  (data: CreateConversationParam) => createConversation(data)
);
