import React from "react";
import { createContext, useState } from "react";

const ContextVerificacoes = createContext();

const VerificacoesContext = ({ children }) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState("");
  const [data, setData] = useState();

  function verificaLogin() {
    if (email && senha) {
      const validaEmail = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
      const validaSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#&$_!\-0-9]).{8,}$/;
      if (validaEmail.test(email) && validaSenha.test(senha)) {
        return true;
      }
    }
    return false;
  }
  function verificaSignUp() {
    if (nome && sobrenome && data && email && senha) {
      if (
        verificaLogin(email, senha) &&
        nome !== "" &&
        sobrenome !== "" &&
        data !== ""
      ) {
        return true;
      }
    }
    return false;
  }
  function clearStates() {
    setNome();
    setData();
    setEmail();
    setSenha();
    setSobrenome();
  }
  return (
    <ContextVerificacoes.Provider
      value={{
        clearStates,
        verificaLogin,
        verificaSignUp,
        setEmail,
        setNome,
        setData,
        setSenha,
        setSobrenome,
      }}
    >
      {children}
    </ContextVerificacoes.Provider>
  );
};

export { VerificacoesContext, ContextVerificacoes };
