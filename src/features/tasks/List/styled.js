import styled, { css } from "styled-components";

export const StyledList = styled.ul`
	padding: 20px;
	word-break: break-word;
	margin: 0;
`;

export const StyledItem = styled.li`
	list-style-type: none;
	border-bottom: 2px solid #eee;
	padding: 10px;
	display: flex;
	align-items: center;

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const StyledSpan = styled.span`
	margin: 0 15px;
	flex-grow: 1;

  ${({ done }) => done && css`
    text-decoration: line-through;
  `}
`;

export const StyledButton = styled.button`
	height: 25px;
	width: 25px;
	color: #fff;
	background-color: #1A7B1F;
	border: none;
	flex-shrink: 0;
	transition: 0.5s;
  
  &:hover {
    background-color: hsl(123, 65%, 34%);
  }

  &:active {
    background-color: hsl(123, 65%, 39%);
  }
`;

export const StyledDeleteButton = styled(StyledButton)`
  background-color: hsl(348, 83%, 47%);

  &:hover {
    background-color: hsl(348, 83%, 52%);
  }
  
  &:active {
    background-color: hsl(348, 83%, 57%);
  }
`;