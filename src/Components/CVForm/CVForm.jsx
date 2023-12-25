import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import EducationalInfo from "./EducationalInfo";
import ExperienceInfo from "./ExperienceInfo";

const CVForm = ({ cv }) => {
  return (
    <CVFormWrapper>
      <PersonalInfo
        persoanalInfo={cv.personalInfo}
        onChange={onChangePersonal}
      />
      <ExperienceInfo />
      <EducationalInfo />
    </CVFormWrapper>
  );
};
const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 700px;
  padding: 2rem;
  border: 8px;
  background-color: #f1f4f6;
`;
export default CVForm;
