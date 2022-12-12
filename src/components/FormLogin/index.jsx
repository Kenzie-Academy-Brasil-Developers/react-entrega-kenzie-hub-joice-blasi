import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { StyledButton } from "../../styles/buttons";
import { StyledFormLogin } from "./style";
import { StyledText } from "../../styles/typography";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const FormLogin = () => {
  const { userLogin, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const submit = async (data) => {
    await userLogin(data);
    reset();
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit(submit)} noValidate>
      <StyledText tag="h2" font="title3" color="#F8F9FA" className="title">
        Login
      </StyledText>

      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        disable={loading}
      />
      {errors.email && (
        <p aria-label="error" className="error">
          {errors.email.message}
        </p>
      )}

      <Input
        id="password"
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        disable={loading}
      />
      {errors.password && (
        <p aria-label="error" className="error">
          {errors.password.message}
        </p>
      )}

      <StyledButton
        type="submit"
        styleButton="primary"
        className="text-button"
        disabled={loading}
      >
        {loading ? "Entrando..." : "Entrar"}
      </StyledButton>

      <StyledText
        tag="p"
        font="headline-bold"
        color="#868E96"
        className="paragraphy"
      >
        Ainda não possui uma conta?
      </StyledText>

      <Link to={"/register"} className="default text-button">
        Cadastre-se
      </Link>
    </StyledFormLogin>
  );
};
