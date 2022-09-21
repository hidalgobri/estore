import styled from "styled-components";

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1rem;
`;
export const ItemCard = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid black;

  img {
    width: 100%;
  }
`;

export const ComprarButton = styled.button`
  width: 100%;
`;
