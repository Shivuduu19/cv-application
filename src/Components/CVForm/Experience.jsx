import React from "react";
import ExperienceItem from "./ExperienceItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Experience = ({ experience }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  return (
    <Section title="Experience" titlePadding="0.5rem" direction="column">
      {experienceItems}
      <Button text="Add"></Button>
    </Section>
  );
};

export default Experience;
