import { useContext, useState } from "react";
import Button from "../button/Button";
import Input from "../Input/Input";
import styled from "styled-components";
import { ContextVerificacoes } from "../../../context/verificacoesContext/VerificacoesContext";
import { useNavigate } from "react-router-dom";
import FlashMessageErro from "../flashMessages/FlashMessageErro";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button,
  input {
    width: 35vh;
  }
`;

const FormLogin = () => {
  const { verificaLogin, setEmail, setSenha } = useContext(ContextVerificacoes);
  const navigate = useNavigate();
  const [isLoginFailed, setisLoginFailed] = useState(false);

  function enviarLogin(e) {
    e.preventDefault();
    if (verificaLogin()) {
      navigate("/home", { replace: true });
    } else {
      setisLoginFailed(true);
      setTimeout(() => {
        setisLoginFailed(false);
      }, 2000);
    }
  }

  return (
    <Form onSubmit={enviarLogin}>
      {isLoginFailed && <FlashMessageErro />}
      <Input
        type="email"
        placeholder="Insira o email"
        event={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Insira a senha"
        event={(e) => setSenha(e.target.value)}
      />
      <Button nome="Fazer login" />
    </Form>
  );
};

export default FormLogin;
