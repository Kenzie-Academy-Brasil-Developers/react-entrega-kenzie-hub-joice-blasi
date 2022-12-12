import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/typography";
import { Input } from "../Input";
import { UpdateTechSchema } from "./schema";
import { StyledModal } from "./style";

export const ModalUpdateTech = ({ item }) => {
  const { setIsModalUpdateVisible, techList, deleteTech, updateTech } =
    useContext(TechContext);

  const tech = techList.find((tech) => tech.id === item.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateTechSchema),
  });

  const submit = (data) => {
    console.log(data);
    updateTech(data, item.id);
    setIsModalUpdateVisible(false);
  };

  return (
    <StyledModal>
      <div>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <header>
            <div>
              <StyledText tag="h3" font="title3" color="#F8F9FA">
                Tecnologia detalhes
              </StyledText>
              <StyledButton
                type="button"
                styleButton="default"
                className="close-button"
                onClick={() => setIsModalUpdateVisible(false)}
              >
                X
              </StyledButton>
            </div>
          </header>
          <section>
            <Input
              id="title"
              label="Nome da tecnologia"
              type="text"
              placeholder="Nome da tecnologia"
              disable={true}
              defaultValue={item.title}
            />

            <label htmlFor="status">Status</label>
            <select
              id="status"
              {...register("status")}
              defaultValue={item.status}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status && (
              <p aria-label="error" className="error">
                {errors.status.message}
              </p>
            )}

            <div>
              <StyledButton type="submit" styleButton="primary">
                Salvar alterações
              </StyledButton>

              <StyledButton
                type="button"
                styleButton="default"
                onClick={() => deleteTech(tech.id)}
              >
                Excluir
              </StyledButton>
            </div>
          </section>
        </form>
      </div>
    </StyledModal>
  );
};
