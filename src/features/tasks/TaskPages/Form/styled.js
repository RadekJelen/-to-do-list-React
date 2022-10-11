import styled from "styled-components";

export const StyledForm = styled.form`
	padding: 20px;
	display: flex;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const StyledInput = styled.input`
	margin-right: 10px;
	padding: 8px;
	border: 2px solid #ddd;
	flex-grow: 1;

  @media (max-width: 767px) {
    margin-right: 0;
  }
`;

export const StyledButton = styled.button`
	background-color: teal;
	color: #fff;
	padding: 10px;
	border: none;
	transition: 0.5s;

  @media (max-width: 767px) {
    margin: 10px 0;
		flex-basis: 100%
  }

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.01);
  }
  
  &:active {
    background-color: hsl(180, 100%, 35%);
  }
`;