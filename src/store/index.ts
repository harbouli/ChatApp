import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import conversationsReducer from "./conversations/conversationSlice";
import messagesReducer from "./messages/messagesSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
