import { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import Button from "../button/Button";
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

const FormRegister = () => {
  const { verificaSignUp, setNome, setSobrenome, setData, setEmail, setSenha } =
    useContext(ContextVerificacoes);
  const navigate = useNavigate();
  const [isSignUpFailed, setisSignUpFailed] = useState(false);

  function enviarSignUp(e) {
    e.preventDefault();
    if (verificaSignUp()) {
      navigate("/home", { replace: true });
    } else {
      setisSignUpFailed(true);
      setTimeout(() => {
        setisSignUpFailed(false);
      }, 2000);
    }
  }
  return (
    <Form onSubmit={enviarSignUp}>
      {isSignUpFailed && <FlashMessageErro />}
      <Input
        type="text"
        placeholder="Insira seu nome"
        event={(e) => setNome(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Insira seu sobrenome"
        event={(e) => setSobrenome(e.target.value)}
      />
      <Input type="date" event={(e) => setData(e.target.value)} />
      <Input
        type="email"
        placeholder="Insira seu email"
        event={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Insira sua senha"
        event={(e) => setSenha(e.target.value)}
      />

      <Button nome="Criar conta" />
    </Form>
  );
};

export default FormRegister;
