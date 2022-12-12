import { StyledModal } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/typography";
import { Input } from "../Input";
import { CreateTechSchema } from "./schema";

export const ModalCreateTech = () => {
  const { setIsModalCreateVisible, createTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CreateTechSchema),
  });

  const submit = (data) => {
    createTech(data);
    reset();
    setIsModalCreateVisible(false);
  };

  return (
    <StyledModal>
      <div>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <header>
            <div>
              <StyledText
                tag="h3"
                font="title3"
                color="#F8F9FA"
                className="titulo"
              >
                Cadastrar tecnologia
              </StyledText>
              <StyledButton
                type="button"
                styleButton="default"
                className="close-button"
                onClick={() => setIsModalCreateVisible(false)}
              >
                X
              </StyledButton>
            </div>
          </header>
          <section>
            <Input
              id="title"
              label="Nome"
              type="text"
              placeholder="Nome da tecnologia"
              register={register("title")}
            />
            {errors.title && (
              <p aria-label="error" className="error">
                {errors.title.message}
              </p>
            )}

            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status && (
              <p aria-label="error" className="error">
                {errors.status.message}
              </p>
            )}

            <StyledButton type="submit" styleButton="primary">
              Cadastrar tecnologia
            </StyledButton>
          </section>
        </form>
      </div>
    </StyledModal>
  );
};
