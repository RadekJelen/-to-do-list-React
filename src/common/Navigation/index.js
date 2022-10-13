import { toAuthor, toTasks } from "../../routes";
import { StyledLink, StyledList, StyledListItem, StyledNavigation } from "./styled";


const Navigation = () => (
  <StyledNavigation>
    <StyledList>
      <StyledListItem><StyledLink to={toTasks()}>Zadania</StyledLink></StyledListItem>
      <StyledListItem><StyledLink to={toAuthor()}>O autorze</StyledLink></StyledListItem>
    </StyledList>
  </StyledNavigation>
);

export default Navigation;