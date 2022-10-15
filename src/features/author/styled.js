import styled from "styled-components";
import { css } from "styled-components";

export const StyledDiv = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const StyledImg = styled.img`
  margin: 10px;
  border-radius: 50%;
  box-shadow: 0px 10px 33px 3px rgba(114, 114, 114, 0.56);
`;

export const StyledParagraf = styled.p`
  margin: 0;
  padding: 10px;
  font-family: 'Fuzzy Bubbles', cursive;

  ${({ header }) => header && css`
  padding: 0px;
  `}
  
  ${({ middle }) => middle && css`
    padding: 0 10px;
  `}
`;