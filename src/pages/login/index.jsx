import { FormLogin } from "../../components/FormLogin";
import logo from "../../assets/img/logo.png";
import { Loading } from "../../components/Loading";
import { StyledDiv } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const LoginPage = () => {
  const { loading } = useContext(UserContext);

  return (
    <StyledDiv>
      <div className="container">
        <header>
          <img src={logo} alt="Logo KenzieHub" />
        </header>
        <FormLogin />
        {loading && <Loading />}
      </div>
    </StyledDiv>
  );
};
