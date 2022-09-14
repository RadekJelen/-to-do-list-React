import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: hsl(180, 100%, 25%);
  transition: color 0.5s;
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    }
    
    &:hover{
      color: hsl(180, 100%, 30%);
      }

    &:active{
      color: hsl(180, 100%, 35%);
    }

    &:disabled{
      color: #aaa;
    }
`;
