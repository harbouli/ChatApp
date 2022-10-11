import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthUser} from "../../utils/api";

export const fetchAuthUserThunk = createAsyncThunk("auth/user", () => {
  return getAuthUser();
});
