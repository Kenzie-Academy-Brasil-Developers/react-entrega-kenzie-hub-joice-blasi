import { StyledLoading } from "./style";
import spinner from "../../assets/img/spinner.png";

export const Loading = () => {
  return (
    <StyledLoading>
      <img src={spinner} alt="Carregando" />
    </StyledLoading>
  );
};
