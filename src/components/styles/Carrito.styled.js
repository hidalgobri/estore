import styled from "styled-components";

export const CarritoContainer = styled.div`
  padding: 7rem 1rem 0 1rem;
`

export const CarritoCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 1rem ;
  padding: 1rem;
`;

export const CarritoDescription = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 10rem;
  grid-template-columns: 1fr 1fr;
  

  img {

    height: 8rem;
    width: 8rem;
  }
`;
