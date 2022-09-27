import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  border: 1px solid hotpink;
  justify-content: space-between;
`;

export const CardDescription = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 10rem;
  grid-template-columns: 1fr 1fr;


  img {
    border: 1px solid green;
    height: 100%;
    width: 100%;
  }
`;
