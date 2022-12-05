import { useForm } from "react-hook-form";
import { RegisterSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/typography";
import { StyledFormRegister } from "./style";

export const FormRegister = ({ request, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema),
  });

  const submit = async (data) => {
    await request(data);
    reset();
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submit)} noValidate>
      <StyledText tag="h2" font="title3" color="#F8F9FA" className="title">
        Crie sua conta
      </StyledText>
      <StyledText
        tag="p"
        font="headline"
        color="#868E96"
        className="paragraphy"
      >
        Rápido e grátis, vamos nessa!
      </StyledText>

      <Input
        id="name"
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        disable={loading}
      />
      {errors.name && (
        <p aria-label="error" className="error">
          {errors.name.message}
        </p>
      )}

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

      <Input
        id="passwordConfirmation"
        label="Confirmar senha"
        type="password"
        placeholder="Digite sua senha novamente"
        register={register("passwordConfirmation")}
        disable={loading}
      />
      {errors.passwordConfirmation && (
        <p aria-label="error" className="error">
          {errors.passwordConfirmation.message}
        </p>
      )}

      <Input
        id="bio"
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        register={register("bio")}
        disable={loading}
      />
      {errors.bio && (
        <p aria-label="error" className="error">
          {errors.bio.message}
        </p>
      )}

      <Input
        id="contact"
        label="Contato"
        type="text"
        placeholder="Opção de contato"
        register={register("contact")}
        disable={loading}
      />
      {errors.contact && (
        <p aria-label="error" className="error">
          {errors.contact.message}
        </p>
      )}

      <label htmlFor="course_module">Selecionar módulo</label>
      <select
        id="course_module"
        {...register("course_module")}
        disabled={loading}
      >
        <option value="">Selecionar Módulo</option>
        <option value="Primeiro Módulo">Primeiro Módulo</option>
        <option value="Segundo Módulo">Segundo Módulo</option>
        <option value="Terceiro Módulo">Terceiro Módulo</option>
        <option value="Quarto Módulo">Quarto Módulo</option>
      </select>
      {errors.course_module && (
        <p aria-label="error" className="error">
          {errors.course_module.message}
        </p>
      )}

      <StyledButton
        type="submit"
        styleButton="primary"
        className="text-button"
        disabled={loading}
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </StyledButton>
    </StyledFormRegister>
  );
};
