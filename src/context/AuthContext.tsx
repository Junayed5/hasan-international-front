import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import axios from "axios";
// import axios from "axios";

export const AuthContext: any = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      if (!token || token === "undefined" || token === "null") {
        setLoading(false);
        setUser(null);
        return;
      }
      const decoded: any = jwtDecode(token);

      if (!decoded) {
        setLoading(false);
        setUser(null);
        return;
      }

      const { _id, exp } = decoded;

      if (exp * 1000 < Date.now()) {
        setLoading(false);
        logout();
        toast.error("Your session has been expired. Please login again.");
        return;
      }

      if (_id === user?._id) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios(`/v1/user/${_id}`);
        const currentUser = response.data;
        setUser(currentUser);
      } catch (error) {
        return error;
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [token, setUser, user?._id]);

  

    const userLogin = async (
      email: string,
      password: string,
      rememberMe: boolean
    ) => {
      setUser(null);
      setLoading(true);
      try {
        const res: any = await axios.post("/v1/auth/login", {
          email,
          password,
        });
        if (rememberMe) {
          localStorage.setItem("token", res?.data?.token);
          sessionStorage.removeItem("token");
        } else {
          sessionStorage.setItem("token", res?.data?.token);
          localStorage.removeItem("token");
        }
        setToken(res.token);
        return res;
      } catch (error) {
        return error;
      }
    };

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    isUserLoading: loading,
    setLoading,
    userLogin,
    logout,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
