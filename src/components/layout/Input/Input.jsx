import { useContext, useState } from "react";
import styled from "styled-components";
import { ContextTheme } from "../../../context/themeContext/ThemeContext";
import { IoEyeOutline, IoEyeOffSharp } from "react-icons/io5";

const MyInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  background-color: inherit;
  border: 1px solid #8c949c;
  outline: none;
  color: ${(props) => (props.theme === "light" ? "#111" : "aliceblue")};
  &:focus {
    border: none;
    outline: 2px solid
      ${(props) => (props.theme === "light" ? "lightseagreen" : "orangered")};
  }
`;

const DivInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  svg {
    margin-top: 1vh;
    margin-left: 30vh;
    position: absolute;
    font-size: 20px;
    color: #8c949c;
  }
`;

const Input = ({ type, placeholder, event }) => {
  const { theme } = useContext(ContextTheme);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [typeInput, setTypeInput] = useState(type);
  function toggleIsPassword() {
    setIsPasswordVisible(isPasswordVisible === true ? false : true);
    setTypeInput(isPasswordVisible === true ? "password" : "text");
  }
  return (
    <DivInput>
      <MyInput
        theme={theme}
        type={typeInput}
        placeholder={placeholder}
        onChange={event}
      />
      {type === "password" && (
        <>
          {isPasswordVisible ? (
            <IoEyeOutline onClick={toggleIsPassword} />
          ) : (
            <IoEyeOffSharp onClick={toggleIsPassword} />
          )}
        </>
      )}
    </DivInput>
  );
};

export default Input;
