import React from "react";
import styled from "styled-components";

const Section = (
  padding,
  title,
  titlePadding,
  contrastTitle,
  direction,
  children
) => {
  return (
    <SectionWrapper padding={padding}>
      <Title padding={titlePadding} contrastTitle={contrastTitle}>
        {title}
      </Title>
      <Children direction={direction}>{children}</Children>
    </SectionWrapper>
  );
};
const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: ${(props) => props.padding};
  margin-bottom: 2rem;
`;
const Title = styled.h3`
  padding: ${(props) => props.padding};

  ${(props) =>
    props.contrast &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorder};
      color: ${({ theme }) => theme.colors.orange};
    `}
`;

const Children = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction === "column" && "column"};
  gap: 1rem;
`;
export default Section;
