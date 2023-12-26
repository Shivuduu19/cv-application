import React, { useState } from "react";
import styled from "styled-components";
// import { v4 as uuidv4 } from "uuid";
import CVForm from "./CVForm/CVForm";
// import CVPreview from "./CVPreview/CVPreview";
// import exampleCV from "./Utils/exampleCV";
import emptyCV from "./Utils/emptyCV";
//
const Main = () => {
  const cv = emptyCV;
  // const [cv, setCv] = useState(emptyCV);
  // const handleChangePersonal = () => {};
  // // const handleChangeFile=()=>{}
  // const handleChangeExperience = () => {};

  // const handleAddExperience = () => {};

  // const handleDeleteExperience = () => {};

  // const handleChangeEducation = () => {};

  // const handleAddEducation = () => {};

  // const handleDeleteEducation = () => {};

  // const handleLoadExample = () => {};

  // const handleReset = () => {};

  return (
    <MainWrapper>
      <CVForm cv={cv} />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;
