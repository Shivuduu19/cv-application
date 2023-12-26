import React from "react";
import styled from "styled-components";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Button from "../Utils/Button";

const CVForm = ({ cv }) => {
  return (
    <CVFormWrapper>
      <Personal personalInfo={cv.personalInfo} />
      <Experience experience={cv.experienceInfo} />
      <Education education={cv.educationInfo} />
      <>
        <Button text="Generate PDF" primary></Button>
        <Button text="Load Example" secondary></Button>
        <Button text="Reset" red></Button>
      </>
    </CVFormWrapper>
  );
};

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* color: #ee1d19; */
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default CVForm;
