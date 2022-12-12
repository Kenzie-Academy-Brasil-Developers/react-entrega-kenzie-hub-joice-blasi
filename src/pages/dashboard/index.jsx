import { Navigate, useParams } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { StyledButton } from "../../styles/buttons";
import { StyledDiv } from "./style";
import { StyledText } from "../../styles/typography";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Loading } from "../../components/Loading";
import trash from "../../assets/img/trash.png";
import { TechContext } from "../../contexts/TechContext";
import { ModalCreateTech } from "../../components/ModalCreateTech";
import { ModalUpdateTech } from "../../components/ModalUpdateTech";
import { useState } from "react";

export const DashboardPage = () => {
  const { user, loading, cleanLocalStorage, navigate, setUser } =
    useContext(UserContext);
  const [element, setElement] = useState({});

  const {
    isModalCreateVisible,
    setIsModalCreateVisible,
    isModalUpdateVisible,
    setIsModalUpdateVisible,
    deleteTech,
    techList,
  } = useContext(TechContext);
  const params = useParams();

  useEffect(() => {
    const getProfile = async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        if (response.data.name !== params.name) {
          navigate("/");
          setUser(null);
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

  if (loading) {
    return <Loading />;
  }
  return user ? (
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
          <section>
            <StyledText tag="h2" font="title2" color="#F8F9FA">
              Tecnologias
            </StyledText>
            <StyledButton
              type="button"
              styleButton="default"
              className="little-button"
              onClick={() => setIsModalCreateVisible(true)}
            >
              +
            </StyledButton>
            {isModalCreateVisible ? <ModalCreateTech /> : ""}
          </section>
          <ul>
            {techList.length ? (
              techList.map((tech) => (
                <li key={tech.id}>
                  <div
                    id={tech.id}
                    onClick={() => {
                      setElement(tech);
                      setIsModalUpdateVisible(true);
                    }}
                  >
                    {isModalUpdateVisible ? (
                      <ModalUpdateTech item={element} />
                    ) : (
                      ""
                    )}
                    <StyledText tag="h3" font="title3" color="#F8F9FA">
                      {tech.title}
                    </StyledText>
                    <StyledText tag="p" font="headline" color="#868E96">
                      {tech.status}
                    </StyledText>
                  </div>
                  <img
                    src={trash}
                    alt="Deletar"
                    className="trash"
                    onClick={() => deleteTech(tech.id)}
                  />
                </li>
              ))
            ) : (
              <StyledText tag="h3" font="title3" color="#F8F9FA">
                Nenhuma tecnologia cadastrada
              </StyledText>
            )}
          </ul>
        </main>
      </div>
    </StyledDiv>
  ) : (
    <Navigate to="/" />
  );
};
