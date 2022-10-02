import styled from "styled-components";

export const FavoritosCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  align-items: center;

  img {
    width: 8rem;
    height: 8rem;
  }

  button{
    border: none;
    min-width: 7rem;
    max-height: 5rem;
    min-height: 2.5rem;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export const FavoritosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  padding: 7rem 1rem 0 1rem;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }
`;
