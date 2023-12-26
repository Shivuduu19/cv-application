import React from "react";
import EducationItem from "./EducationItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Education = ({ educationInfo, onChange, onAdd, onDelete }) => {
  // console.log(education);
  const educationItems = educationInfo.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onDelete={onDelete}
    ></EducationItem>
  ));

  return (
    <Section title="Education" titlePadding="0.5rem" direction="column">
      {educationItems}
      <Button text="Add" onClick={onAdd}></Button>
    </Section>
  );
};

export default Education;
