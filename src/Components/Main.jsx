import React from "react";
import styled from "styled-components";
import GeneralInfo from "./GeneralInfo";
import CVForm from "./CVForm/CVForm";

const Main = () => {
  return (
    <MainWrapper>
      <CVForm />
    </MainWrapper>
  );
};
const MainWrapper = styled.main`
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: auto;
`;
export default Main;
