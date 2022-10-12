import {createAsyncThunk} from "@reduxjs/toolkit";
import {getMessages} from "../../utils/api";

export const fetchMessagesThunk = createAsyncThunk(
  "data/messages",
  (conversationId: number) => getMessages(conversationId)
);
