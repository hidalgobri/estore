import styled from "styled-components"

export const SubtotalContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    padding: 1rem;
    box-shadow: 0px 3px 5px 0px rgb(216 191 216);
    margin-top: 7rem;
    margin-left: 1rem;
    max-height: 15rem;

    @media (max-width: 576px) {
        margin-top: 9rem;
        margin-right: 1rem;
      }
`