import React from "react";
import styled from "styled-components";

const Input = ({ type, name, value, placeholder }) => {
  return (
    <InputWrapper
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
    />
  );
};
const InputWrapper = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  &:focus {
    border: 1px solid #654326;
  }
`;
export default Input;
