import styled from "styled-components";

export const CharacterListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px 16px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr 1fr;
  } 
`;