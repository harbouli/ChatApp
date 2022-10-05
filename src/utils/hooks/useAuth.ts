import {useEffect, useState} from "react";
import {getAuthUser} from "../api";

export const useAuth = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();
  useEffect(() => {
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
