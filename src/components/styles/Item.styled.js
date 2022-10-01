import styled from "styled-components";

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1.5rem;
  margin: 0rem 1rem;
  padding-top: 7rem;

`;
export const ItemCard = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: white;

  img {
    width: 15rem;
    height: 10rem;
  }

  h3{
    margin: 0;
  }
`;

export const ComprarButton = styled.button`
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  margin-top:0.5rem;
  background-color: #FF69B4;
  border: none;
`;

