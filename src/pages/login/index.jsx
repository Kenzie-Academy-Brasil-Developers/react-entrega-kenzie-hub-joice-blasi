import { FormLogin } from "../../components/FormLogin";
import logo from "../../assets/img/logo.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { StyledDiv } from "./style";

export const LoginPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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

  return (
    <StyledDiv>
      <div className="container">
        <header>
          <img src={logo} alt="Logo KenzieHub" />
        </header>
        <FormLogin request={userLogin} loading={loading} />
        {loading && <Loading />}
      </div>
    </StyledDiv>
  );
};
