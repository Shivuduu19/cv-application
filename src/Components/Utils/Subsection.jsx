import React from "react";
import styled from "styled-components";

const Subsection = ({ title, children }) => {
  return (
    <SubsectionWrapper>
      <Title>{title}</Title>
      {children}
    </SubsectionWrapper>
  );
};

const SubsectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: ${(props) => props.padding};
`;

const Title = styled.h4`
  padding: ${(props) => props.padding};
  line-height: 1.6;
`;

export default Subsection;
