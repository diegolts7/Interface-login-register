import { useContext, useState } from "react";
import styled from "styled-components";
import { BiAdjust } from "react-icons/bi";
import FormLogin from "../../layout/formLogin/FormLogin";
import { ContextTheme } from "../../../context/themeContext/ThemeContext";
import FormRegister from "../../layout/formRegister/FormRegister";
import { ContextVerificacoes } from "../../../context/verificacoesContext/VerificacoesContext";

const ConteinerPrincipal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  svg {
    cursor: pointer;
  }
`;

const ConteinerCentral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5vh;
  gap: 2rem;
  min-height: 45vh;
  width: 40vh;
`;

const InfoToogleLogin = styled.div`
  p {
    font-size: 15px;
  }
  strong {
    cursor: pointer;
    &:hover {
      color: #8c949c;
    }
  }
`;

const ConteinerTexto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vh;
  margin-left: 5vh;
  height: 35vh;
  border-right: 2px solid gray;
  p {
    font-size: 70px;
  }
`;

const LoginRegister = () => {
  const { theme, mudarTheme } = useContext(ContextTheme);
  const { clearStates } = useContext(ContextVerificacoes);
  const [isRegister, setIsRegister] = useState(false);
  function togglesetIsRegisterAndClearStates() {
    setIsRegister(isRegister === false ? true : false);
    clearStates();
  }

  return (
    <ConteinerPrincipal>
      <BiAdjust
        style={{ fontSize: "25px", position: "absolute", marginTop: "10vh" }}
        onClick={mudarTheme}
      />
      <ConteinerTexto>
        {isRegister ? <p>Sign-up</p> : <p>Sign-in</p>}
      </ConteinerTexto>
      <ConteinerCentral theme={theme}>
        {isRegister ? (
          <>
            <FormRegister />
            <InfoToogleLogin>
              <p>
                If you already have an account -{" "}
                <strong onClick={togglesetIsRegisterAndClearStates}>
                  Sign-in
                </strong>
              </p>
            </InfoToogleLogin>
          </>
        ) : (
          <>
            <FormLogin />
            <InfoToogleLogin>
              <p>
                If you don't have an account -{" "}
                <strong onClick={togglesetIsRegisterAndClearStates}>
                  Sign-up
                </strong>
              </p>
            </InfoToogleLogin>
          </>
        )}
      </ConteinerCentral>
    </ConteinerPrincipal>
  );
};

export default LoginRegister;
