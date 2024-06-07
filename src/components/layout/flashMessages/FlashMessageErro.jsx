import styled from "styled-components";

const FlashMessage = styled.strong`
  font-size: 15px;
  color: #ff0000;
  text-align: center;
`;

const FlashMessageErro = () => {
  return <FlashMessage>Preencha os campos corretamente.</FlashMessage>;
};

export default FlashMessageErro;
