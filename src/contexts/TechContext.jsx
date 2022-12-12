import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [isModalCreateVisible, setIsModalCreateVisible] = useState(false);
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [techList, setTechList] = useState([]);
  const token = JSON.parse(localStorage.getItem("@TOKEN"));

  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const response = await api.get("/profile", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setTechList(response.data.techs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [techList, setTechList]);

  const createTech = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("users/techs", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setTechList(...techList, response);
      toast.success("Tecnologia criada com sucesso");
    } catch (error) {
      toast.error("Erro ao criar tecnologia");
    } finally {
      setLoading(false);
    }
  };

  const deleteTech = async (id) => {
    try {
      setLoading(true);
      await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const filtered = techList.filter((tech) => {
        return tech.id !== id;
      });
      setTechList(filtered);
      toast.success("Tecnologia removida com sucesso");
    } catch (error) {
      toast.error("Erro ao deletar");
    } finally {
      setLoading(false);
    }
  };

  const updateTech = async (data, id) => {
    try {
      setLoading(true);
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setTechList(...techList, response);
    } catch (error) {
      toast.error("Erro ao atualizar tecnologia");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        isModalCreateVisible,
        setIsModalCreateVisible,
        isModalUpdateVisible,
        setIsModalUpdateVisible,
        createTech,
        deleteTech,
        updateTech,
        techList,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
