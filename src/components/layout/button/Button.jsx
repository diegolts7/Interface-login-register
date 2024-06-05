import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ContextTheme } from "../../../context/themeContext/ThemeContext";

const MyButton = styled.button`
  background-color: ${(props) =>
    props.theme === "light" ? "lightseagreen" : "orangered"};
  color: aliceblue;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
`;

const Button = ({ nome, event }) => {
  const { theme } = useContext(ContextTheme);
  return (
    <MyButton theme={theme} onClick={event}>
      {nome}
    </MyButton>
  );
};

export default Button;
