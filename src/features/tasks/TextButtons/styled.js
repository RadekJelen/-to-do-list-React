import styled from "styled-components";

export const StyledDiv = styled.div`
display: flex;
margin: 5px;

@media (max-width: 767px) {
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export const StyledButton = styled.button`
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: hsl(180, 100%, 25%);
  transition: color 0.5s;
  
@media (max-width: 767px) {
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
