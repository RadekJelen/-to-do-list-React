import { StyledLink, StyledList, StyledListItem, StyledNavigation } from "./styled";


const Navigation = () => (
  <StyledNavigation>
    <StyledList>
      <StyledListItem><StyledLink to="/zadania">Zadania</StyledLink></StyledListItem>
      <StyledListItem><StyledLink to="/autor">O autorze</StyledLink></StyledListItem>
    </StyledList>
  </StyledNavigation>
);

export default Navigation;