import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <h1>CV Application</h1>
      </HeaderWrapper>
      ;
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  background-color: #456783;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1800px;
  padding: 2rem 6rem;
  margin: 0 auto;
  color: #653423;
  font-size: 1rem;

  @media (max-width: 460px) {
    justify-content: center;
    text-align: center;
  }
`;
export default Header;
