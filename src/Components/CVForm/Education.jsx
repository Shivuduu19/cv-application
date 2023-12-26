import React from "react";
import EducationItem from "./EducationItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Education = ({ education }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      educationItem={educationItem}
    ></EducationItem>
  ));

  return (
    <Section title="Education" titlePadding="0.5rem" direction="column">
      {educationItems}
      <Button text="Add"></Button>
    </Section>
  );
};

export default Education;
