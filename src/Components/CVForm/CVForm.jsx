import React from "react";
import styled from "styled-components";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Button from "../Utils/Button";

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onLoadExample,
  onReset,
}) => {
  return (
    <CVFormWrapper>
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      <Experience
        experienceInfo={cv.experienceInfo}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
      <Education
        educationInfo={cv.educationInfo}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
      <>
        <Button text="Generate PDF" primary="true"></Button>
        <Button
          text="Load Example"
          onClick={onLoadExample}
          secondary="true"
        ></Button>
        <Button text="Reset" onClick={onReset} red="true"></Button>
      </>
    </CVFormWrapper>
  );
};

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 460px) {
    width: 100%;
    padding: 10px;
    margin: 0 auto;
  }
`;

export default CVForm;
