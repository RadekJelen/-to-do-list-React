import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  padding: 8px;
  border: 2px solid #ddd;
  ${({ shorter }) => shorter && css`
    flex-grow: 1;
    margin-right: 10px;
    @media (max-width: 767px) {
      margin: 0 0 10px 0;
    }
  `};
`;