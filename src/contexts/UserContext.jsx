import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../components/Loading";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUser(response.data);
      } catch (error) {
        toast.error("Ops! Algo deu errado");
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const userLogin = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      toast.success("Acesso liberado!");
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      navigate(`/dashboard/${response.data.user.name}`);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const cleanLocalStorage = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider
      value={{
        userLogin,
        user,
        setUser,
        loading,
        setLoading,
        navigate,
        cleanLocalStorage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
