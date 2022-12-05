import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { api } from "../../services/api";
import { StyledButton } from "../../styles/buttons";
import { toast } from "react-toastify";
import { StyledDiv } from "./style";
import { StyledText } from "../../styles/typography";
import { useEffect } from "react";

export const DashboardPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("@TOKEN")),
          },
        });
        if (response.data.name !== params.name) {
          navigate("/");
          setUser("");
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
        }
        setUser(response.data);
      } catch (error) {
        toast.error("Ops! Algo deu errado");
      }
    };
    getProfile();
  }, []);

  const cleanLocalStorage = () => {
    setUser("");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  return (
    <StyledDiv>
      <div className="container">
        <nav>
          <img src={logo} alt="Logo KenzieHub" />
          <StyledButton
            type="button"
            styleButton="default"
            className="size-button"
            onClick={cleanLocalStorage}
          >
            Sair
          </StyledButton>
        </nav>
      </div>
      <div className="border"></div>
      <div className="container">
        <header>
          <StyledText tag="h1" font="title1" color="#F8F9FA">
            Olá, {user.name}
          </StyledText>
          <StyledText tag="p" font="headline-bold" color="#868E96">
            {user.course_module}
          </StyledText>
        </header>
      </div>
      <div className="border"></div>
      <div className="container">
        <main>
          <StyledText tag="h1" font="title1" color="#F8F9FA" className="title">
            Que pena! Estamos em desenvolvimento :(
          </StyledText>
          <StyledText tag="h3" font="headline" color="#F8F9FA">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </StyledText>
        </main>
      </div>
    </StyledDiv>
  );
};
