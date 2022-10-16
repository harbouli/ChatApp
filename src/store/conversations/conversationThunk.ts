import {createAsyncThunk} from "@reduxjs/toolkit";
import {getConversations} from "../../utils/api";

export const fetchConversationsThunk = createAsyncThunk(
  "conversations/fetch",
  () => getConversations()
);
