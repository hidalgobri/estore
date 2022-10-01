import styled from "styled-components";

export const CarritoContainer = styled.div`
  padding-top: 7rem;
  padding: 7rem 1rem 0 1rem;
`

export const CarritoCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 1rem ;

`;

export const CarritoDescription = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 10rem;
  grid-template-columns: 1fr 1fr;
  

  img {

    height: 100%;
    width: 15rem;
  }
`;
