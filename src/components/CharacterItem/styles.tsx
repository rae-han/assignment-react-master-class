import styled from "styled-components";

export const CharacterItemContainer = styled.li`
  position: relative;
  width: 160px;
  
  &:hover {
    transform: scale(1.25);
  }
  
  & > a {
    width: 100%;
  }
  
  .Item__image {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    
    
  }
  
  .Item__title {
    margin-top: 12px;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
  }
`;