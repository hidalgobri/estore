import styled from "styled-components";

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1.5rem;
  margin: 0rem 1rem;
  padding-top: 7rem;



  @media (max-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, auto);
    padding-top: 9rem;
  }

`;
export const ItemCard = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: white;
    box-shadow: 0px 3px 5px 0px rgb(216 191 216);

  .itemImg {
    width: 15rem;
    height: 10rem;

  }

  h3{
    margin: 0;
  }
  h3, p{
    cursor: default;
  }

  .corazon {
    margin-left: auto;
    width: 10%;
    cursor: pointer;
  }

  @media (max-width: 576px) {
    margin-left: 3rem;
    margin-right: 3rem;

    .corazon {
      width: 9%;
    }
  }
`;

export const ComprarButton = styled.button`
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  margin-top:0.5rem;
  background-color: #FF69B4;
  border: none;
  cursor: pointer;
`;

