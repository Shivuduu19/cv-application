import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterWrapper>
      Copyright © 2023 shiva kumar
      <Link href="https://github.com/Shivuduu19/">
        <FaGithub />
      </Link>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: aliceblue;
`;
const Link = styled.a`
  position: relative;
  font-size: 2rem;
  margin-left: 0.6rem;
  color: #545433;
  &:hover {
    color: #b0b04f;
  }
  &:active {
    color: #a5a555;
  }
`;
export default Footer;
