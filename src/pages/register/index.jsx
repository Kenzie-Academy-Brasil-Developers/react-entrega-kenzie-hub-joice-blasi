import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { FormRegister } from "../../components/FormRegister";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { Loading } from "../../components/Loading";
import { StyledDiv } from "./style";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const userRegister = async (data) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/");
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
          <Link to={"/"} className="default">
            Voltar
          </Link>
        </header>
        <FormRegister request={userRegister} loading={loading} />
        {loading && <Loading />}
      </div>
    </StyledDiv>
  );
};
