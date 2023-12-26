import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";
import TextArea from "../Utils/TextArea";
import FileInput from "../Utils/FileInput";

const Personal = ({ personalInfo }) => {
  return (
    <Section
      title="Personal Information"
      titlePadding="0.5rem"
      direction="column"
    >
      <Input type="text" name="firstName" placeholder="First name" />
      <Input type="text" name="lastName" placeholder="Last name" />
      <Input type="text" name="title" placeholder="Title" />
      <FileInput name="photo" label="Photo" />
      <Input type="text" name="address" placeholder="Address" />
      <Input type="text" name="phoneNumber" placeholder="Phone number" />
      <Input type="text" name="email" placeholder="Email" />
      <TextArea name="description" placeholder="Description" />
    </Section>
  );
};

export default Personal;
