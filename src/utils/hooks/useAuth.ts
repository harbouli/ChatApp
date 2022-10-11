import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux/";
import {AppDispatch, RootState} from "../../store";
// import {authUser} from "../../store/user/userSlice";
import {fetchAuthUserThunk} from "../../store/user/userThunk";
import {getAuthUser} from "../api";
import {User} from "../types";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const controller = new AbortController();
  const {user: userState} = useSelector((state: RootState) => state);
  useEffect(() => {
    dispatch(fetchAuthUserThunk());

    return () => controller.abort();
  }, []);
};
