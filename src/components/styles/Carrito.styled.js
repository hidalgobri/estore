import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin: 0 1rem 1rem 1rem;
  padding: 0 1rem;
`;

export const CardDescription = styled.div`
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
