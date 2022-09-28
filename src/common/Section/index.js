import { StyledSection, StyledHeader, StyledTitle } from "./styled";

const Section = ({ title, body, headerButtons }) => (
  <StyledSection>
    <StyledHeader grid={headerButtons}>
      <StyledTitle>{title}</StyledTitle>
      {headerButtons}
    </StyledHeader>
    {body}
  </StyledSection>
);

export default Section;