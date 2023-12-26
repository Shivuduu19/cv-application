import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";

const EducationItem = ({ educationItem }) => {
  return (
    <>
      <Input
        type="text"
        name="universityName"
        placeholder="University name"
        value={educationItem.universityName}
      />
      <Input
        type="text"
        name="city"
        placeholder="City"
        value={educationItem.city}
      />
      <Input
        type="text"
        name="degree"
        placeholder="Degree"
        value={educationItem.degree}
      />
      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        value={educationItem.subject}
      />
      <Input
        type="text"
        name="from"
        placeholder="From"
        value={educationItem.from}
      />
      <Input type="text" name="to" placeholder="To" value={educationItem.to} />
      <Button text="Delete"></Button>
    </>
  );
};

export default EducationItem;
