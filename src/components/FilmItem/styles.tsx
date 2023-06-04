import styled from "styled-components";

export const FilmItemContainer = styled.li`
  & > button {
    padding: 10px 24px;
    font-size: 1.6rem;
    font-weight: bold;
    border: none;
    border-radius: 24px;
    outline: none;
    
    &:hover {
      transform: scale(1.125);
    }
  }
`;