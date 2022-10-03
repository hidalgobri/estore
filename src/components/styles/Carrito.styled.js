import styled from "styled-components";

export const CarritoListContainer = styled.div`
  padding: 7rem 1rem 0 1rem;
  
  @media (max-width: 576px) {
    padding-top: 1rem;
   
  }
`

export const CarritoCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 1rem ;
  padding: 0 1rem;
  box-shadow: 0px 3px 5px 0px rgb(216 191 216);

  h3, p {
    cursor: default;
  }
`;
export const CarritoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);


  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

`


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
