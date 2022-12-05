import { Link } from "react-router-dom";
import { StyledText } from "../../styles/typography";
import { StyledNotFound } from "./style";

export const NotFound = () => {
  return (
    <StyledNotFound>
      <div className="container">
        <StyledText tag="h1" font="title1" color="#F8F9FA" className="title">
          Ops! Página não encontrada
        </StyledText>
        <StyledText
          tag="h3"
          font="title3"
          color="#868E96"
          className="paragraphy"
        >
          404 not found
        </StyledText>
        <Link to={"/"} className="button-back">
          Voltar
        </Link>
      </div>
    </StyledNotFound>
  );
};
