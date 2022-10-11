import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import conversationsReducer from "./conversations/conversationSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    conversations: conversationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
