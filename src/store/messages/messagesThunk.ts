import {createAsyncThunk} from "@reduxjs/toolkit";
import {getMessages} from "../../utils/api";

export const fetchMessagesThunk = createAsyncThunk(
  "messages/fetch",
  (conversationId: number) => getMessages(conversationId)
);
