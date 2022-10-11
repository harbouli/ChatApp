import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthUser, User} from "../../utils/types";
import {fetchAuthUserThunk} from "./userThunk";

type userStore = {
  user: User;
  loading: boolean;
  isAuth: boolean;
};

const initialState: userStore = {
  user: {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
  },
  isAuth: false,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    console.log("OK");
    builder
      .addCase(fetchAuthUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAuthUserThunk.fulfilled, (state, action) => {
        delete action.payload.data?.password;
        state.user = action.payload.data;
        state.loading = false;
        state.isAuth = true;
      })
      .addCase(fetchAuthUserThunk.rejected, (state) => {
        state.loading = false;
        state.isAuth = false;
      });
  },
});

export const {setLoading} = userSlice.actions;

export default userSlice.reducer;
