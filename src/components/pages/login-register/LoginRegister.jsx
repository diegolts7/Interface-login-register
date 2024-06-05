import { useContext } from "react";
import styled from "styled-components";
import { BiAdjust } from "react-icons/bi";
import FormLogin from "../../layout/formLogin/FormLogin";
import { ContextTheme } from "../../../context/themeContext/ThemeContext";

const ConteinerPrincipal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ConteinerCentral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 1rem;
  min-height: 60vh;
  min-width: 55vh;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  border: 1px solid
    ${(props) => (props.theme === "light" ? "none" : "aliceblue")};
  background-color: ${(props) =>
    props.theme === "light" ? "none" : "rgba(255, 255, 255, 0.1)"};

  svg {
    font-size: 25px;
  }
`;

const LoginRegister = () => {
  const { theme, mudarTheme } = useContext(ContextTheme);
  return (
    <ConteinerPrincipal>
      <ConteinerCentral theme={theme}>
        <BiAdjust onClick={mudarTheme} />
        <FormLogin />
      </ConteinerCentral>
    </ConteinerPrincipal>
  );
};

export default LoginRegister;
