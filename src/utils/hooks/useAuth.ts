import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux/";
import {AppDispatch, RootState} from "../../store";
// import {authUser} from "../../store/user/userSlice";
import {fetchAuthUserThunk} from "../../store/user/userThunk";
import {getAuthUser} from "../api";
import {User} from "../types";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();
  const {user: userState} = useSelector((state: RootState) => state);
  useEffect(() => {
    dispatch(fetchAuthUserThunk());
    getAuthUser()
      .then(({data}) => {
        setLoading(false);
        setUser(data);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });

    return () => controller.abort();
  }, []);
  return {user, loading};
};
