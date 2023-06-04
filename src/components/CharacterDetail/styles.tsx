import styled from "styled-components";

export const CharacterDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .Detail__image {
    width: 200px;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin-top: 48px;
    border-radius: 50%;
  }
  
  .Detail__title {
    margin-top: 48px;
    font-size: 3.6rem;
    
    & > span {
      font-size: 4.8rem;
      font-weight: bold;
      color: ${props => props.theme.accentColor}
    }
  }
`;