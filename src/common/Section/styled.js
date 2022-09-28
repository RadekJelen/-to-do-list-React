import styled, { css } from "styled-components";

export const StyledSection = styled.section`
	background-color: #fff;
	margin-bottom: 10px;
`;

export const StyledHeader = styled.header`
	padding: 20px;
	border-bottom: 3px solid #eee;

  ${({ grid }) => grid && css`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const StyledTitle = styled.h2`
	font-size: 20px;
	margin: 0;
`;

