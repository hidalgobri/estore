import styled from "styled-components";

export const FavoritosCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  align-items: center;
  box-shadow: 0px 3px 5px 0px rgb(216 191 216);
  

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

  p{
    cursor: default;
  }
`;

export const FavoritosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  padding: 7rem 1rem 0 1rem;
  gap: 1.5rem;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 576px) {
    padding-top: 9rem;
    grid-template-columns: repeat(2, auto);
  }
`;
