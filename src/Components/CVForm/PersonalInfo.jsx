import React from "react";
import Section from "../utilities/Section";
import Input from "../utilities/Input";
import FileInput from "../utilities/FileInput";

const PersonalInfo = ({ personalInfo, onChange }) => {
  return (
    <Section title="personalInfo" titlePadding="0.5rem" direction="column">
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="firstName"
        placeholder="First Name"
        value={personalInfo.firstName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={personalInfo.lastName}
      />
      <Input
        type="text"
        name="title"
        placeholder="Title"
        value={personalInfo.title}
      />
      <FileInput
        onChange={(e) => onChange(e)}
        name="photo"
        label="Photo"
        value={personalInfo.photo}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="Address"
        placeholder="Address"
        value={personalInfo.asdress}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
        value={personalInfo.phoneNumber}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name="description"
        placeholder="Description"
        value={personalInfo.description}
      />
    </Section>
  );
};

export default PersonalInfo;
