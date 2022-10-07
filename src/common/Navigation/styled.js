import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
  background-color: teal;
`;

export const StyledList = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledListItem = styled.li`
  list-style: none;
  padding: 20px;
  letter-spacing: 0.5px;
  transition: transform 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;