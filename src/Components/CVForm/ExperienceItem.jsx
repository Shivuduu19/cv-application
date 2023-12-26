import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";

const ExperienceItem = ({ experienceItem }) => {
  return (
    <>
      <Input
        type="text"
        name="position"
        placeholder="Position"
        value={experienceItem.position}
      />
      <Input
        type="text"
        name="company"
        placeholder="Company"
        value={experienceItem.company}
      />
      <Input
        type="text"
        name="city"
        placeholder="City"
        value={experienceItem.city}
      />
      <Input
        type="text"
        name="from"
        placeholder="From"
        value={experienceItem.from}
      />
      <Input type="text" name="to" placeholder="To" value={experienceItem.to} />
      <Button text="Delete"></Button>
    </>
  );
};

export default ExperienceItem;
